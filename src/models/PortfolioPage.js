import mongoose from 'mongoose';
const schema=new mongoose.Schema({portfolioId:{type:mongoose.Schema.Types.ObjectId,ref:'Portfolio',required:true,index:true},name:{type:String,required:true,maxlength:100},slug:{type:String,required:true,match:/^[a-z0-9]+(?:-[a-z0-9]+)*$/},order:{type:Number,default:0},seo:{title:String,description:String,imageId:{type:mongoose.Schema.Types.ObjectId,ref:'GeneratedImage'}},visible:{type:Boolean,default:true}},{timestamps:true});
schema.index({portfolioId:1,slug:1},{unique:true});
export default mongoose.models.PortfolioPage||mongoose.model('PortfolioPage',schema);
