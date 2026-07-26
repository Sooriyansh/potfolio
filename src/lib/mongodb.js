import mongoose from 'mongoose';
const state = global.mongooseState || (global.mongooseState = { conn:null, promise:null });
export async function connectDB(){
  if(state.conn) return state.conn;
  if(!process.env.MONGODB_URI) throw new Error('MONGODB_URI is not configured');
  state.promise ||= mongoose.connect(process.env.MONGODB_URI, { bufferCommands:false });
  state.conn = await state.promise;
  return state.conn;
}
