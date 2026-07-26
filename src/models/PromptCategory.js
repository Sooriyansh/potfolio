import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true,unique:true,trim:true},slug:{type:String,required:true,unique:true,lowercase:true,index:true},description:String,featured:{type:Boolean,default:false},order:{type:Number,default:0}},{timestamps:true});
export default mongoose.models.PromptCategory||mongoose.model('PromptCategory',schema);
