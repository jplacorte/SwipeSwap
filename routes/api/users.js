const express = require('express')
const router = express.Router()
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
            
            user = new User({
                name,
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

// @route   POST api/users
// @des     Get all users
// @access  Public
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router