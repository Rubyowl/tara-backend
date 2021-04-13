const Request=require('../schemas/requestschema');
const Answer=require('../schemas/answerschema');


const getRequest=(req, res)=>{
    let returnVal = [];

    Request.find()
        .populate("answers")
        .then(reqResult=>{
            returnVal = reqResult;
            Answer.find()
                .then(answResult=>{
                    if(answResult.length>0){
                        reqResult.forEach(function(request, index){
                            answResult.forEach(function(answer){
                                if(request.requestId == answer.answerId)
                                    returnVal[index].answers.push(answer._id);
                                console.log(returnVal[index]);
                            });
                        });
                    }
                    // res.send(reqResult.length>0?returnVal:'No Requests');
                });
            console.log('result: ', returnVal)
            res.send(reqResult.length>0? reqResult:'No Requests');
        })
        .catch(err=>{
            console.log(err);
        })
        /**/
}
const postRequest=(req,res)=>{
    console.log("requestbodyis", req.body)
    const request = new Request
    (
        req.body
    )
    request.save()
        .then(result=>{
            // console.log('result: ',result)
            res.send(result.length>0?result:'No Request');
        })
        .catch(err=>{
            console.log(err);
        })
}
module.exports={
    getRequest,
    postRequest
}