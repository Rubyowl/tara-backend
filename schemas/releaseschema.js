const mongoose=require('mongoose');

const Schema = mongoose.Schema

const Release = new Schema(
    {
        releaseId: { type: Number  },
        date: { type: String},
        blogTitle: { type: String},
        blogContent: {type: String}
    },
    { timestamps: true },
)
module.exports = mongoose.model('release', Release)