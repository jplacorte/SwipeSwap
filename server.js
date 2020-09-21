const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const fileupload = require('express-fileupload')

const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const profile = require('./routes/api/profile')
const transaction = require('./routes/api/transaction')
const item = require('./routes/api/item')

const app = express()

app.use(fileupload({
    useTempFiles: true
}))

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/users', users)
app.use('/auth', auth)
app.use('/profile', profile)
app.use('/item', item)
app.use('/transaction', transaction)

// Set static folder
// app.use(express.static('client/build'))

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))