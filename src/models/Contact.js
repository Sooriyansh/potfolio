import mongoose from 'mongoose';
const schema = new mongoose.Schema({ name:{type:String,required:true,trim:true,maxlength:80}, email:{type:String,required:true,trim:true,lowercase:true}, company:{type:String,trim:true,maxlength:100}, projectType:{type:String,required:true}, budget:{type:String,required:true}, message:{type:String,required:true,maxlength:2000}, status:{type:String,enum:['new','read','replied'],default:'new'} },{timestamps:true});
export default mongoose.models.Contact || mongoose.model('Contact',schema);
