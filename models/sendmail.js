const nodemailer = require("nodemailer");

const NODEMAILER_PASS = process.env.NODEMAILER_PASS;
const NODEMAILER_USER = process.env.NODEMAILER_USER;
const NODEMAILER_SERVICE = process.env.NODEMAILER_SERVICE;

    // Generate test SMTP service account from ethereal.email
    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: NODEMAILER_SERVICE,
    auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS
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

  
  