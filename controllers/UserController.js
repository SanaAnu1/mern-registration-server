const users=require('../Model/userModel.js')

//register

exports.register=async(req,res)=>{
    console.log("Inside register API");
    const {name,address,email,mobile,birth,gender,course,password}=req.body
    // console.log(name,address,email,mobile,birth,gender,course,password);
     try {
        const existingUser=await users.findOne({email})
        console.log(existingUser);
        if(existingUser){
            res.status(406).json("Already Registered!!!")
        }else{
            //add user to collection
            const newUser=new users({
                name,address,email,mobile,birth,gender,course,password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
     } catch (error) {
        res.status(401).json(error)
     }

}

//getuserdetails
exports.userDetails=async(req,res)=>{
    try{
        const userDetails=await users.find()
        res.status(200).json(userDetails)
    }catch(err){
        res.status(401).json(err)
    }
}
