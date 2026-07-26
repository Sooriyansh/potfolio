import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},name:{type:String,required:true,maxlength:120},category:{type:String,index:true},componentTree:{type:mongoose.Schema.Types.Mixed,required:true},thumbnail:String,source:{type:String,enum:['manual','ai'],default:'manual'}},{timestamps:true});
schema.index({userId:1,updatedAt:-1});
export default mongoose.models.CustomComponent||mongoose.model('CustomComponent',schema);
