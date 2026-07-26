import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,index:true},generatedPromptId:{type:mongoose.Schema.Types.ObjectId,ref:'GeneratedPrompt',required:true,index:true},title:{type:String,required:true,maxlength:180},collection:String,favorite:{type:Boolean,default:false,index:true}},{timestamps:true});
schema.index({userId:1,updatedAt:-1});
export default mongoose.models.SavedPrompt||mongoose.model('SavedPrompt',schema);
