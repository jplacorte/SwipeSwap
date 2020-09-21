const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const cloudinary = require('cloudinary').v2

const Profile = require('../../models/Profile')
const User = require('../../models/User')

cloudinary.config({
    cloud_name: 'dibx7ua1g',
    api_key: '622971834249575',
    api_secret: '1UI_jshZXsKRmgGZ9pG62Wwn-1Q'
})

// @route   GET api/profile/me
// @des     Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
    try{
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'email'])

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user' })
        }

        res.json(profile)
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/profile
// @des     Create/Update a user profile
// @access  Private
router.post('/', auth, async (req, res) => {

    const {
        dateofbirth,
        location,
        avatar,
        google,
        facebook,
        instagram
    } = req.body

    const profileFields = {}
    profileFields.user = req.user.id
    if(dateofbirth) profileFields.dateofbirth = dateofbirth
    if(location) profileFields.location = location
    if(avatar) profileFields.avatar = avatar

    //Build social object
    profileFields.social = {}
    if(google) {profileFields.social.google = google}else{profileFields.social.google ="Google"}
    if(facebook) {profileFields.social.facebook = facebook}else{profileFields.social.facebook ="Facebook"}
    if(instagram) {profileFields.social.instagram = instagram}else{profileFields.social.instagram ="Instagram"}

    try {
        
        let profile = await Profile.findOne({ user: req.user.id })

        if(profile){
            //Update
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            )

            return res.json(profile)
        }

        //Create 
        profile = new Profile(profileFields)
        await profile.save()
        res.json(profile)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/profile
// @des     Get all profiles
// @access  Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', [ 'name', 'email' ])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/profile/user/:user_id
// @des     Get profile by user ID
// @access  Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', [ 'name' ])

        if(!profile) return res.status(400).json({ msg: 'Profile not found' })

        res.json(profile)
    } catch (err) {
        console.error(err.message)
        if(err.kind == 'ObjectId'){
            return res.status(400).json({ msg: 'Profile not found' })
        }
        res.status(500).send('Server Error')
    }
})

// @route   POST api/profile/subslevel
// @des     Create/Update records level
// @access  Private
router.post('/records', auth, async (req, res) => {
    const {
        subscriptionlevel,
        totalswaps,
        totalswipes,
        averagetimeofuse,
        coins,
        rating
    } = req.body

    const records = {}
    records.user = req.user.id
    if(subscriptionlevel) records.subscriptionlevel = subscriptionlevel
    if(totalswaps) records.totalswaps = totalswaps
    if(totalswipes) records.totalswipes = totalswipes
    if(averagetimeofuse) records.averagetimeofuse = averagetimeofuse
    if(coins) records.coins = coins
    if(rating) records.rating = rating

    try {

        let profile = await Profile.findOne({ user: req.user.id })

        if(profile){
            //Update
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: records },
                { new: true }
            )

            return res.json(profile)
        }
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   PUT api/profile/subslevel
// @des     Add badges
// @access  Private
router.put('/badge', async (req, res) => {
    const {
        badgename
    } = req.body

    const newBadge = {
        badgename
    }

    try {

        const profile = await Profile.findOne({ user: req.user.id })

        profile.badges.unshift(newBadge)

        await profile.save()
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   PUT api/profile/upload/photo
// @des     Update profile photo
// @access  Private
router.put('/upload/photo', auth, async (req, res) => {

    const file = req.files.photo

    await cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {

        let profile = await Profile.findOne({ user: req.user.id })
        const profileField = {}

        profileField.user = req.user.id
        profileField.avatar = result.url

        profile = await Profile.findOneAndUpdate(
            {user: req.user.id},
            {$set: profileField},
            {new: true}
        )
        return res.json(profile)
    })
})

module.exports = router