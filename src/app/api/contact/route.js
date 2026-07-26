import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';
const attempts=new Map();
export async function POST(request){
 try{
  const ip=request.headers.get('x-forwarded-for')?.split(',')[0]||'local'; const now=Date.now();
  if(now-(attempts.get(ip)||0)<60000) return NextResponse.json({error:'Please wait a minute before sending another message.'},{status:429});
  const body=await request.json();
  if(body.website) return NextResponse.json({ok:true});
  const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!body.name?.trim()||!email.test(body.email||'')||!body.projectType||!body.budget||body.message?.trim().length<20) return NextResponse.json({error:'Please complete every required field with valid details.'},{status:400});
  await connectDB(); await Contact.create({name:body.name,email:body.email,company:body.company,projectType:body.projectType,budget:body.budget,message:body.message}); attempts.set(ip,now);
  return NextResponse.json({ok:true,message:'Thanks — your message is safely in my inbox.'},{status:201});
 }catch(error){console.error(error);return NextResponse.json({error:'The message could not be sent. Please try again.'},{status:500});}
}
