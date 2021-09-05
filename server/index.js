require('dotenv').config()
const express = require('express')
//const sequelize = require('')
const cors = require('cors')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {

    }
}

start()