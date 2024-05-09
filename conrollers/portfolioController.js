const SendEmailController =(req,res)=>{
try{
      return res.status(200).send({
        success:true,
        message:"Your Meeage Send Successfully",
      })
}catch(error){
console.log(error)
return res.status(500).send({
    success:false,
    message:'Send Email API Error',
    error
})
}
};

module.exports ={SendEmailController  }