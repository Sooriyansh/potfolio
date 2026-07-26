import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',index:true},storageKey:{type:String,required:true,unique:true},originalName:{type:String,required:true},mimeType:{type:String,enum:['image/jpeg','image/png','image/webp','image/avif'],required:true},size:{type:Number,required:true,max:10485760},width:Number,height:Number,alt:String,focalPoint:{x:{type:Number,default:50},y:{type:Number,default:50}},status:{type:String,enum:['processing','ready','rejected'],default:'processing'}},{timestamps:true});
schema.index({userId:1,createdAt:-1});
export default mongoose.models.UploadedAsset||mongoose.model('UploadedAsset',schema);
