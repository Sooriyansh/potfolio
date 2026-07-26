import mongoose from 'mongoose';
const schema = new mongoose.Schema({ title:{type:String,required:true}, slug:{type:String,required:true,unique:true}, shortDescription:String, fullDescription:String, problem:String, research:String, decisions:String, challenges:String, solution:String, result:String, learning:String, category:String, technologies:[String], images:[String], liveUrl:String, githubUrl:String, featured:{type:Boolean,default:false} },{timestamps:true});
export default mongoose.models.Project || mongoose.model('Project',schema);
