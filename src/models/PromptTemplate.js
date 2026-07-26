import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true,maxlength:180},slug:{type:String,required:true,unique:true,index:true},categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'PromptCategory',index:true},selections:{type:mongoose.Schema.Types.Mixed,required:true},promptSections:{type:[mongoose.Schema.Types.Mixed],default:[]},difficulty:{type:String,enum:['beginner','intermediate','advanced'],default:'intermediate'},featured:{type:Boolean,default:false,index:true},published:{type:Boolean,default:true,index:true},copyCount:{type:Number,default:0},viewCount:{type:Number,default:0}},{timestamps:true});
schema.index({title:'text'});
export default mongoose.models.PromptTemplate||mongoose.model('PromptTemplate',schema);
