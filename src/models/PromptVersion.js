import mongoose from 'mongoose';
const schema=new mongoose.Schema({generatedPromptId:{type:mongoose.Schema.Types.ObjectId,ref:'GeneratedPrompt',required:true,index:true},version:{type:Number,required:true},mode:String,prompt:{type:String,required:true,maxlength:50000},source:{type:String,enum:['generator','manual','ai'],default:'generator'},aiAction:String},{timestamps:true});
schema.index({generatedPromptId:1,version:1},{unique:true});
export default mongoose.models.PromptVersion||mongoose.model('PromptVersion',schema);
