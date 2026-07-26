import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',required:true,index:true},provider:{type:String,enum:['vercel'],default:'vercel'},status:{type:String,enum:['queued','building','ready','failed'],default:'queued',index:true},providerDeploymentId:String,url:String,error:String,attempt:{type:Number,default:1}},{timestamps:true});
schema.index({portfolioId:1,createdAt:-1});
export default mongoose.models.Deployment||mongoose.model('Deployment',schema);
