const express= require('express');
const path=require('path');
var nodemailer=require('nodemailer');
const router = express.Router();

router.get('/', (req, res)=> {
    res.render('contact');
})

router.post('/sendmail',(req, res)=> {
    const user= {
        name:req.body.name,
        email:req.body.email,
        number:req.body.number
    }
    console.log(user)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:'',//Your gmail username
            pass:'' // Your gmail password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    var mailOptions = {
        from:req.body.name,
        to:'', // The person whom you want to send the email 
        subject:'Mail through Nodejs',
        text: `Hello, Mr.Jagdeep, someone wants to connect with you through your contact form
        'Details'
        Name: ${req.body.name} 
        Email: ${req.body.email}
        Number: ${req.body.number}
        ` 
    }
    transporter.sendMail(mailOptions, (err, info)=> {
        if(err) console.log("An error occured!"+err);
        else
        console.log("Mail sent successfully!"+info);
    }) // mail change karo apnad 

})
module.exports=router;