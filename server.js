const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const profile = require('./routes/api/profile')
const transaction = require('./routes/api/transaction')
const item = require('./routes/api/item')
const match = require('./routes/api/match')
const want = require('./routes/api/want')
const chat = require('./routes/api/chat')

const app = express()

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

const io = require('socket.io')(server, {
  path: '/mysocket',
  cors: {
    origin: '*',
  }
});

// Assign socket object to every request
app.use(function (req, res, next) {
  req.io = io;
  next();
})

// Connect Database
connectDB()

// Body Parser middleware to parse request bodies
app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
app.use(bodyParser.json())

// CORS middleware
app.use(cors())

// Define Routes
// app.use('/users', users)
// app.use('/auth', auth)
// app.use('/profile', profile)
// app.use('/item', item)
// app.use('/transaction', transaction)
// app.use('/match', match)
// app.use('/want', want)
// app.use('/chat', chat)

// Development
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/profile', profile)
app.use('/api/item', item)
app.use('/api/transaction', transaction)
app.use('/api/match', match)
app.use('/api/want', want)
app.use('/api/chat', chat)