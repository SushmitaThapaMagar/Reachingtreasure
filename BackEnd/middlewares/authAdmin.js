import jwt from 'jsonwebtoken'

//admin authentication middleware

const authAdmin = async(req, res, next) =>{
    try {
        //token is the smallest individual unit of code recognized by language parser

        const {atoken} = req.headers
        if(!atoken){
            return res.json({success:false, message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

        if(token_decode !=process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:'Not Authorized Login Again'})
        }

        next()




    }catch(error){
        console.log(error)
        res.json({succes:false, message:error.message})
    }
}


export default authAdmin











