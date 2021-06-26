const {Router} = require('express');
const router = Router();
const Project = require('../models/Project')
const projectBL = require('./models/projectBL')

router.get('/', async (req,res) => {
    let projects = await Project.find({})
})

module.exports = router;