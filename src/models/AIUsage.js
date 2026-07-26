import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',index:true},portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio'},action:{type:String,required:true},model:String,inputTokens:{type:Number,default:0},outputTokens:{type:Number,default:0},success:{type:Boolean,default:true}},{timestamps:true});
schema.index({userId:1,createdAt:-1});
export default mongoose.models.AIUsage||mongoose.model('AIUsage',schema);
