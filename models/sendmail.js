const nodemailer = require("nodemailer");


    // Generate test SMTP service account from ethereal.email
    // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "tito84@ethereal.email", // generated ethereal user
        pass: "G6bJyYNW4wP1ZFyTyM" // generated ethereal password
        }
    },
    {
        from: '<tito84@ethereal.email>'
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

  
  