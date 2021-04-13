const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const Answer = new Schema(
    {
        answerId: { type: Number },
        answerTitle: { type: String },
        answerContent: { type: String },
        requests: {
            type: Schema.Types.ObjectId,
            ref: "requests"
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('answer', Answer);
