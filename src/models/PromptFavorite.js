import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},promptTemplateId:{type:mongoose.Schema.Types.ObjectId,ref:'PromptTemplate',required:true,index:true}},{timestamps:true});
schema.index({userId:1,promptTemplateId:1},{unique:true});
export default mongoose.models.PromptFavorite||mongoose.model('PromptFavorite',schema);
