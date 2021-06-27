const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    technologies: [String],
    img: String
})

module.exports = mongoose.model('projects', projectSchema)