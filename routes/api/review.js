const express = require('express');
const router = express.Router()
const auth = require('../../middleware/auth')

const Review = require('../../models/Review')
const Item = require('../../models/Item')
const Transaction = require('../../models/Transaction')

// @route   GET api/review/
// @des     Get swapped items
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const review = await Review.find({ user: req.user.id })

        if(!review){
            return res.status(400).json({ msg: 'Empty...' })
        }

        res.json(review)

    } catch (err) {
        console.error(err)
        res.status(500).send("Server Error")
    }
})

// @route   GET api/review/
// @des     Get all reviews
// @access  Private
router.get('/revs', auth, async (req, res) => {
    try {
        const review = await Review.find({ owner: req.user.id })

        if(!review){
            return res.status(400).json({ msg: 'Empty...' })
        }

        res.json(review)

    } catch (err) {
        console.error(err)
        res.status(500).send("Server Error")
    }
})

// @route   PUT api/decline/:id/:user_id
// @desc    Deline transaction
// @access  Private
router.put('/decline/:user_id/:id', auth, async (req, res) => {
    try {
         console.log("aa")
        await req.io.sockets.emit(`declineTrans${req.params.user_id}`, 'Declined Trans')
        const trans = await Transaction.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: {swapped: 'Declined'}},
            {new: true}
        )
        return res.json(trans)
    } catch (err) {
        console.error(err)
        res.status(500).send("Server Error")
    }
})

// @route   POST api/review/:id
// @des     Post/Update a review
// @access  Private
router.post('/:id/:owner_id/:trans_id', auth, async (req, res) => {

    const item = await Item.findById(req.params.id)
    const itemReview = await Review.findOne({ item: req.params.id })
    const user = await Profile.findOne({user:req.user.id}).populate('user', ['name'])
    const owner = await Profile.findOne({user:req.params.owner_id}).populate('user', ['name'])

    const {
        reviewdetails
    } = req.body

    // const image2 = item.photo[1].url ? item.photo[1].url : ''
    // const image3 = item.photo[2].url ? item.photo[2].url : ''
    // const image4 = item.photo[3].url ? item.photo[3].url : ''
    try {
        if(itemReview){
            review = await Review.findOneAndUpdate(
                { item: req.params.id},
                { $set: { review: reviewdetails } },
                { new: true }
            )
        }else{
             
                await req.io.sockets.emit(`approve`, 'item approved')

                await Item.findByIdAndUpdate(
                    {_id: req.params.id},
                    { $set: { swapped: true } },
                    {new: true}
                )

                await Transaction.findById(
                    {_id: req.params.trans_id},
                    {$set: {swapped: 'true'}},
                    {new: true}
                )

                review = new Review({
                    user: req.user.id,
                    owner: owner.user._id,
                    avatar: owner.avatar,
                    ownername: owner.user.name,
                    name: user.user.name,
                    item: req.params.id,
                    itemname: item.itemname,
                    itemdesc: item.description,
                    itemstatus: item.status,
                    review: reviewdetails,
                    image: item.photo[0].url,
                    // image2: image2,
                    // image3: image3,
                    // image4: image4,
                })

                await review.save()
                return res.json(review)
            
        }  

    } catch (err) {

        console.error(err)
        res.status(500).send("Server Error")

    }
})

module.exports = router