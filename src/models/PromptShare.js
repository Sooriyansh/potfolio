import mongoose from 'mongoose';
const schema=new mongoose.Schema({generatedPromptId:{type:mongoose.Schema.Types.ObjectId,ref:'GeneratedPrompt',required:true,index:true},userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',index:true},tokenHash:{type:String,required:true,unique:true},expiresAt:{type:Date,index:true},viewCount:{type:Number,default:0},active:{type:Boolean,default:true}},{timestamps:true});
schema.index({expiresAt:1},{expireAfterSeconds:0});
export default mongoose.models.PromptShare||mongoose.model('PromptShare',schema);
