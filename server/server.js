const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cors =require('cors')
const bodyParser = require("body-parser");
app.use(bodyParser.json());


// Import the mongoose module
const mongoose = require('mongoose')
const custmer  = require('./model/user_model')
const router = express.Router()

app.use(cors())
app.use(express.json())

const port=4000;


const connection= mongoose.connect('mongodb+srv://root:root@cluster0.ghjtj1a.mongodb.net/book_app');
    
if(!connection)
{ console.log("no connection");} else{console.log("your connection is Okay");}

app.listen(port,
     ()=>(console.log(`running on port ${port}`)));


     

app.get('/home', (req,res)=>
(
    res.json({messg:"hello baby"})
))

 
    


app.post('/Signup',async (req,res)=>
{
    
    console.log("working")

    try {
        const{name,email,password}=req.body;
        const custmer_data = await custmer.create({name,email,password})
   console.log(custmer_data);
   console.log(req.body.name);
    
		res.json({ messg:"helloww" })
    } catch (error) {
       console.log(`errore${error}`)
     
        
        res.json({ status: "error", error: 'Duplicate email' })
    }

    })
 




    // app.post('/api/login', async (req, res) => {
    //     const user = await User.findOne({
    //         email: req.body.email,
    //     })
    
    //     if (!user) {
    //         return { status: 'error', error: 'Invalid login' }
    //     }
    
    //     const isPasswordValid = await bcrypt.compare(
    //         req.body.password,
    //         user.password
    //     )
    
    //     if (isPasswordValid) {
    //         const token = jwt.sign(
    //             {
    //                 name: user.name,
    //                 email: user.email,
    //             },
    //             'secret123'
    //         )
    
    //         return res.json({ status: 'ok', user: token })
    //     } else {
    //         return res.json({ status: 'error', user: false })
    //     }
    // })







