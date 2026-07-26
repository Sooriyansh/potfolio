import mongoose from 'mongoose';
const schema = new mongoose.Schema({ email:{type:String,unique:true,required:true,lowercase:true}, passwordHash:{type:String,required:true} },{timestamps:true});
export default mongoose.models.Admin || mongoose.model('Admin',schema);
