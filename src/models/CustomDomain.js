import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',required:true,index:true},hostname:{type:String,required:true,unique:true,lowercase:true},status:{type:String,enum:['pending','verified','failed'],default:'pending',index:true},verification:{type:mongoose.Schema.Types.Mixed,default:{}},verifiedAt:Date},{timestamps:true});
export default mongoose.models.CustomDomain||mongoose.model('CustomDomain',schema);
