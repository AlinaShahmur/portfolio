const {Schema } = require("mongoose");

const projectSchema = new Schema({
    name: String,
    description: String,
    techologies: [String],
    img: String
})

module.exports = mongoose.model('project', projectSchema)