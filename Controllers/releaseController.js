const Release=require('../schemas/releaseschema')

const getReleases=(req, res)=>{

    Release.find()
        .then(result=>{
            // console.log('result: ',result)
            res.send(result.length>0?result:'No Releases');
        })
        .catch(err=>{
            console.log(err);
        })
}
const postRelease=(req,res)=>{
    const release = new Release(req.body)
    release.save()
        .then(result=>{
            console.log('result: ',result)
            res.send(result.length>0?result:'No Releases');
        })
        .catch(err=>{
            console.log(err);
        })
}
module.exports={
    getReleases,
    postRelease
}