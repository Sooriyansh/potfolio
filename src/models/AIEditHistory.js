import mongoose from 'mongoose';
const schema=new mongoose.Schema({portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',index:true},userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',index:true},componentId:{type:String,required:true},prompt:{type:String,required:true,maxlength:1200},before:{type:mongoose.Schema.Types.Mixed,required:true},suggestion:{type:mongoose.Schema.Types.Mixed,required:true},applied:{type:Boolean,default:false},model:String,tokenUsage:{type:mongoose.Schema.Types.Mixed,default:{}}},{timestamps:true});
schema.index({portfolioId:1,createdAt:-1});
export default mongoose.models.AIEditHistory||mongoose.model('AIEditHistory',schema);
