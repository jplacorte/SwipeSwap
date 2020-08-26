const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send("API running"))

// Define Routes


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))