import mongoose from "mongoose";
import { type } from "os";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: Object, required: true },
    gender : { type: String, default: "Not Selected"},
    dob : { type: String, default: "Not Selected"},
    phone : { type: String, default: Number}
  

})

const userModel = mongoose.models.userModel || mongoose.model('doctor', userSchema)
export default userModel
