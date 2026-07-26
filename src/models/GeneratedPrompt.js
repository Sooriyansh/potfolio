import mongoose from 'mongoose';
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',index:true},anonymousId:{type:String,index:true},mode:{type:String,required:true},selections:{type:mongoose.Schema.Types.Mixed,required:true},currentVersion:{type:Number,default:1},public:{type:Boolean,default:false,index:true}},{timestamps:true});
schema.index({userId:1,createdAt:-1});
export default mongoose.models.GeneratedPrompt||mongoose.model('GeneratedPrompt',schema);
