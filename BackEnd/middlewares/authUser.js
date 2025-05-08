import jwt from 'jsonwebtoken'

//user authentication middleware

const authUser = async(req, res, next) => {

    try {
        //token is the smallest individual unit of code recognized by language parser

        const token = req.headers['token'];
        if(!token){
            return res.status(401).json({success:false, message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        
        req.user = req.user || {};
        req.user.userId = token_decode.id;
        
        next()

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message });
    }
}


export default authUser











