import Jwt  from "jsonwebtoken";
import userModel from "../models/User.js";

var checkUserAuth = async(req,res,next)=>{
    let token 
    const {authorization} = req.headers

    if(authorization && authorization.startsWith('Bearer')){
        try{
            token = authorization.split(' ')[1];
            
            const {userId} = Jwt.verify(token,process.env.JWT_SECRET_KEY)
            console.log(userId)
            req.user = await userModel.findById(userId).select('-password')
            next()
        }
        catch(err){
            console.log(err)
            res.status(401).send({'status':'Failed','message':'unauthorized User'})
        }    
    } 

    if(!token){
        res.status(401).send({'status':'Failed', 'message':'Un Authorized user No Token'})
    }
}

export default checkUserAuth