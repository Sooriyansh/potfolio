import mongoose from 'mongoose';
const schema=new mongoose.Schema({email:{type:String,required:true,unique:true,lowercase:true,trim:true,index:true},name:{type:String,trim:true,maxlength:100},passwordHash:{type:String,select:false},googleId:{type:String,sparse:true,unique:true},emailVerifiedAt:Date,role:{type:String,enum:['user','admin'],default:'user'},status:{type:String,enum:['active','blocked'],default:'active'},aiLimits:{textDaily:{type:Number,default:30},imagesDaily:{type:Number,default:20}}},{timestamps:true});
export default mongoose.models.User||mongoose.model('User',schema);
