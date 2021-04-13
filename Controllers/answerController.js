const Answer=require('../schemas/answerschema')

const getAnswer=(req, res)=>{

    Answer.find()
        .populate("requests")
        .then(result=>{
            console.log('result: ',result)
            res.send(result.length>0?result:'No Answers');
        })
        .catch(err=>{
            console.log(err);
        })
}
const postAnswer=(req,res)=>{
    console.log("answerbodyis", req.body)
    const answer = new Answer
    (
        req.body
    )
    answer.save()
        .then(result=>{
            console.log('result: ',result)
            res.send(result.length>0?result:'No Answer');
        })
        .catch(err=>{
            console.log(err);
        })
}
module.exports={
    getAnswer,
    postAnswer
}