const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const Limitation = require('../../models/Limitation')

// @route   GET api/limitations/
// @desc    Get all limitations
// @access  Private
router.get('/', auth, async (req, res) => {
    try{
        const limit = await Limitation.findOne({ user: req.user.id })

        return res.json(limit)
    } catch (err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   POST api/limitations/
// @desc    Add/Update limitations
// @access  Private
router.post('/', auth, async (req, res) => {

    const user = await Limitation.findOne({ user: req.user.id })

    try{
       
        if(user){
            const limit = await Limitation.findOneAndUpdate(
                { user: req.user.id },
                { $set: { rewind: req.body.prev, superwant: req.body.swantCount, rewindsleft: req.body.rewindsleft, superwantleft: req.body.superwantleft, count: req.body.count } }                
            )
            return res.json(limit)
        }else{
            limit = new Limitation({
                user: req.user.id,
                rewind: req.body.prev,
                superwant: req.body.swantCount,
                rewindsleft: req.body.rewindsleft,
                superwantleft: req.body.superwantleft,
                count: req.body.count
            })

            await limit.save()

            return res.json(limit)
        }

    } catch (err){
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})


module.exports = router