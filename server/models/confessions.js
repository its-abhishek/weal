const mongoose = require("mongoose")
const confessionSchema = new mongoose.Schema({
    query:String,
    confession:String,
    user:String,
    createdAt: { type: Date, default: new Date() }
    })
module.exports = Confession = mongoose.model("Confessions",confessionSchema)
    