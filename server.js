require('dotenv').config()
const express = require('express')
const products = require('./routes/products')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');


//enable all corses:
app.use(cors())
//or we can enable only requests coming from a specific url
/* var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));*/

// middleware make an access to the req,res objects and move the cycle to the next request with the next function
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/products', products)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //start the sever and listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

