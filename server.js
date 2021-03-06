const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require("nodemailer");

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cors({origin: "*" }));


app.get('/',cors(), function(req, res){
    res.send('Hello fitted bedrooms');
})

app.post('/', async function(req, res)  {
    const {name}= req.body;
    const {email}= req.body;
    const {phone}= req.body;
    const {message}= req.body;
    console.log(req.body);
    res.status(200).send({"message": "Data received"});
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'rishwanths2298a@gmail.com',
          pass: 'Suji2298'
        },
      });

      const msg ={
        
        from:  '"Fitted Bedrooms" <rishwanths2298a@gmail.com>', // sender address
        to: 'rishwanths2298a@gmail.com', // list of receivers
      
        subject: "Angular Fitted Bedrooms Form", // Subject line
        text: "Contact Form ", // plain text body
        html: `Name: ${name} , Mail id: ${email} , Mobile Number: ${phone} , Message: ${message}`,
       
         // html body
  }
  // send mail with defined transport object
  const info = await transporter.sendMail(msg);

})

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
