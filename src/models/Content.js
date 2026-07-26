import mongoose from 'mongoose';
const base={title:{type:String,required:true},order:{type:Number,default:0},active:{type:Boolean,default:true}};
export const Skill=mongoose.models.Skill||mongoose.model('Skill',new mongoose.Schema({...base,group:String,items:[String],description:String},{timestamps:true}));
export const Timeline=mongoose.models.Timeline||mongoose.model('Timeline',new mongoose.Schema({...base,period:String,description:String},{timestamps:true}));
export const Testimonial=mongoose.models.Testimonial||mongoose.model('Testimonial',new mongoose.Schema({...base,quote:String,name:String,role:String},{timestamps:true}));
export const SiteContent=mongoose.models.SiteContent||mongoose.model('SiteContent',new mongoose.Schema({key:{type:String,unique:true,required:true},value:mongoose.Schema.Types.Mixed},{timestamps:true}));
