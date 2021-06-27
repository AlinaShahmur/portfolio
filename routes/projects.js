const {Router} = require('express');
const router = Router();
const Project = require('../models/Project')

router.get('/', async (req,res) => {
    try {
        let projects = await Project.find({});
        res.json(projects);
    }
    catch (e) {
        res.status(500).json('Something went wrong')
    }

})

module.exports = router;