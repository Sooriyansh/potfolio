import {NextResponse} from 'next/server';
import {openAIErrorResponse} from '@/lib/openaiError';
const rate=new Map(),styles=new Set(['Professional','Realistic','3D','Minimal','Futuristic','Illustration','Isometric','Glassmorphism','Cyberpunk','Abstract']),aspects={landscape:'1536x1024',square:'1024x1024',portrait:'1024x1536'};
function limited(ip,count){const day=new Date().toISOString().slice(0,10),key=`${ip}:${day}`,used=(rate.get(key)||0)+count;rate.set(key,used);return used>20}
export async function POST(request){
 const ip=request.headers.get('x-forwarded-for')?.split(',')[0]||'local';
 if(!process.env.OPENAI_API_KEY)return NextResponse.json({error:'Set OPENAI_API_KEY on the server to generate images.'},{status:503});
 let body;try{body=await request.json()}catch{return NextResponse.json({error:'Invalid JSON request.'},{status:400})}
 const{prompt,style='Professional',aspect='landscape',count=4}=body||{},safeCount=Math.min(4,Math.max(1,Number(count)||1));
 if(limited(ip,safeCount))return NextResponse.json({error:'Daily image-generation limit reached.'},{status:429});
 if(typeof prompt!=='string'||!prompt.trim()||prompt.length>1200||!styles.has(style)||!aspects[aspect])return NextResponse.json({error:'Use a valid prompt, style, and aspect ratio.'},{status:400});
 const finalPrompt=`Create a ${style.toLowerCase()} portfolio website image. ${prompt}. Strong composition, polished production quality, no watermark, no logos, no private information, and no text unless the prompt explicitly requests exact text.`;
 try{
  const response=await fetch('https://api.openai.com/v1/images/generations',{method:'POST',headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({model:process.env.OPENAI_IMAGE_MODEL||'gpt-image-2',prompt:finalPrompt,n:safeCount,size:aspects[aspect],quality:'medium',output_format:'webp'})});
  const result=await response.json();if(!response.ok){const failure=openAIErrorResponse(response,result,'Image generation failed.');return NextResponse.json({error:failure.error,code:failure.code},{status:failure.status})}
  const images=(result.data||[]).map(item=>item.b64_json?`data:image/webp;base64,${item.b64_json}`:item.url).filter(Boolean);
  if(!images.length)throw new Error('The image service returned no usable image.');
  return NextResponse.json({images,metadata:{model:process.env.OPENAI_IMAGE_MODEL||'gpt-image-2',style,aspect,count:images.length}});
 }catch(error){return NextResponse.json({error:error.message||'Image generation failed.'},{status:502})}
}
