const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')
const Profile = require('../../models/Profile')


// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id)
        res.json(user)
    }
    catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/auth
// @des     Authenticate user & get token
// @access  Public
router.post('/', 
    check('email', 'Please include a valid email')
        .isEmail()
    , async (req, res) => {
    const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, avatar } = req.body
        
        try {
            let user = await User.findOne({ email })

            if(!user){            
                user = new User({
                    name,
                    email
                })
                await user.save( async (err, docs) => {
                    const profileFields = {}
                    profileFields.user = docs._id
                    profileFields.avatar = avatar.data.url
                    
                    profileFields.social = {}
                    profileFields.social.google = "Google"
                    profileFields.social.facebook = "Facebook"
                    profileFields.social.instagram = "Instagram"

                    profile = new Profile(profileFields)
                    await profile.save()
                })   
                
            }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload, 
                config.get('jwtSecret'),
                {expiresIn: '5 days'},
                (err, token) => {
                    if(err) throw err
                    res.json({ token })
                }
            )
            
        } catch(err) {
            console.error(err.message)
            res.status(500).send('Server error') 
        }
        
    }
)

module.exports = router