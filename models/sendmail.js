const nodemailer = require("nodemailer");


    // Generate test SMTP service account from ethereal.email
    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ashaturnaya@gmail.com",
        pass: "hofzhtxdmjiieecu" 
        }
    }
)
  
    // send mail with defined transport object
function mailer(message) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve("The message is sent") 
            }
        });
    })
}


module.exports = mailer

  
  