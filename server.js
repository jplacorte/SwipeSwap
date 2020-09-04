const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => res.send("API running"))

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/item', require('./routes/api/item'))
app.use('/api/transaction', require('./routes/api/transaction'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))