import mongoose from 'mongoose';
const schema=new mongoose.Schema({portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',required:true,index:true},userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},name:{type:String,required:true,maxlength:120},version:{type:Number,required:true},snapshot:{type:mongoose.Schema.Types.Mixed,required:true}},{timestamps:true});
schema.index({portfolioId:1,version:-1},{unique:true});
export default mongoose.models.VersionHistory||mongoose.model('VersionHistory',schema);
