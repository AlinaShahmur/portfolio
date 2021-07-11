const {Router} = require('express');
const router = Router();
const mailer = require('../models/sendmail')

router.post('/', async (req, res) => {
    let formData = req.body;
    let message = {
        from:`${formData.name}`, // sender address
        to: "ashaturnaya@gmail.com", // list of receivers
        subject: "Contact from web-site potfolio", // Subject line
        text: "Hello,", // plain text body
        html: `<p> ${formData.message} </p> <p> ${formData.phone}</p> <p>${formData.email}</p>`, // html body
    }
    mailer(message).then(data => res.json(data))

})

module.exports = router;