const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')

const User = require('../../models/User')

// @route   POST api/users
// @des     Register user
// @access  public
router.post('/', async (req, res) => {

        const { name, email } = req.body
        
        try {
            let user = await User.findOne({ email })

            if(user){
                return res.send(true)
            }
            
            const avatar = gravatar.url(email, {
                s:'200',
                r:'pg',
                d:'mm'
            })

            user = new User({
                name,
                avatar,
                email
            })
            
            await user.save()

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload, 
                config.get('jwtSecret'),
                {expiresIn: 360000},
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