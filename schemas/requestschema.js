const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const Request = new Schema(
    {
        requestId: { type: Number },
        date: { type: Date},
        requestTitle: { type: String },
        requestContent: { type: String },
        answers: [{
            type: Schema.Types.ObjectId,
            default: void 0,
            ref: "answer"
        }]
    },
    { timestamps: true },
);

module.exports = mongoose.model('request', Request);
