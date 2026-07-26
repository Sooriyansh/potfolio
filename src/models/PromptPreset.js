import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,unique:true},description:String,selections:{type:mongoose.Schema.Types.Mixed,required:true},active:{type:Boolean,default:true,index:true},order:{type:Number,default:0}},{timestamps:true});
export default mongoose.models.PromptPreset||mongoose.model('PromptPreset',schema);
