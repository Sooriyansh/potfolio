import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',index:true},portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',index:true},componentId:String,prompt:{type:String,required:true,maxlength:1200},style:String,aspect:String,provider:{type:String,default:'openai'},model:String,storageKey:{type:String,required:true},mimeType:String,width:Number,height:Number,alt:String,focalPoint:{x:{type:Number,default:50},y:{type:Number,default:50}},status:{type:String,enum:['processing','ready','failed'],default:'ready'}},{timestamps:true});
schema.index({userId:1,createdAt:-1});
export default mongoose.models.GeneratedImage||mongoose.model('GeneratedImage',schema);
