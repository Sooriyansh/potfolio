import mongoose from 'mongoose';
const schema=new mongoose.Schema({portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',required:true,index:true},sessionHash:{type:String,index:true},type:{type:String,enum:['view','project_click','social_click','contact_click','download'],required:true,index:true},path:String,referrer:String,device:{type:String,enum:['desktop','tablet','mobile','unknown'],default:'unknown'},metadata:{type:mongoose.Schema.Types.Mixed,default:{}}},{timestamps:{createdAt:true,updatedAt:false}});
schema.index({portfolioId:1,createdAt:-1},{expireAfterSeconds:31536000});
export default mongoose.models.AnalyticsEvent||mongoose.model('AnalyticsEvent',schema);
