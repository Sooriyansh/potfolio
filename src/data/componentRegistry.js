import {AlignLeft,Box,BriefcaseBusiness,Columns2,Columns3,Contact,GalleryHorizontal,Heading1,ImageIcon,LayoutGrid,ListCollapse,Minus,MousePointerClick,Navigation,Orbit,PanelTop,Quote,Rows3,Share2,Sparkles,Text,Video} from 'lucide-react';

export const componentGroups=[
 {name:'Essentials',items:[['navbar','Navbar',Navigation],['hero','Hero section',PanelTop],['heading','Heading',Heading1],['paragraph','Paragraph',Text],['image','Image',ImageIcon],['button','Button',MousePointerClick],['socials','Social links',Share2]]},
 {name:'Portfolio',items:[['about','About section',AlignLeft],['skills','Skills section',Sparkles],['projects','Project grid',BriefcaseBusiness],['services','Services',Rows3],['testimonials','Testimonials',Quote],['contact','Contact form',Contact],['gallery','Image gallery',GalleryHorizontal]]},
 {name:'Layout',items:[['container','Container',Box],['columns2','Two columns',Columns2],['columns3','Three columns',Columns3],['bento','Bento grid',LayoutGrid],['tabs','Tabs',ListCollapse],['divider','Divider',Minus],['spacer','Spacer',Box],['footer','Footer',PanelTop]]},
 {name:'Media & effects',items:[['video','Video',Video],['scene3d','3D scene',Orbit],['animatedBackground','Animated background',Sparkles]]},
];

export const canContain=new Set(['hero','about','container','columns2','columns3','bento','projects','services','footer']);
export const containerTypes=new Set(['container','columns2','columns3','bento']);
export const defaultStyles={background:'#0b1525',color:'#f5f8ff',padding:48,margin:0,gap:18,radius:16,width:100,maxWidth:1200,minHeight:120,opacity:100,borderWidth:1,borderColor:'#263a56',shadow:20,blur:0,columns:1,fontSize:18,fontWeight:500,align:'left'};

const content={
 navbar:{title:'AM',text:'About · Work · Contact'},
 hero:{eyebrow:'PRODUCT DESIGNER · DEVELOPER',title:'Ideas made clear, useful, and memorable.',text:'I design and build thoughtful digital products for ambitious teams.',buttonText:'Explore selected work'},
 heading:{title:'A thoughtful heading'},
 paragraph:{text:'Write something meaningful here. Click this text to edit it directly.'},
 image:{title:'Project image',alt:'Portfolio project visual',src:''},
 button:{buttonText:'Start a conversation',link:'#contact'},
 socials:{text:'GitHub · LinkedIn · Instagram'},
 about:{eyebrow:'ABOUT',title:'I turn complexity into confident products.',text:'My work connects product strategy, interface design, and front-end craft.'},
 skills:{eyebrow:'CAPABILITIES',title:'Skills in context',items:['Product design','React','Design systems','Motion']},
 projects:{eyebrow:'SELECTED WORK',title:'Projects with a point of view',items:['Northstar Finance','Field Notes','Signal Studio']},
 services:{eyebrow:'SERVICES',title:'How I can help',items:['Product strategy','Interface design','Front-end development']},
 testimonials:{title:'Trusted collaboration',text:'“Clear thinking, strong craft, and a calm path from idea to launch.”'},
 contact:{eyebrow:'LET’S TALK',title:'Have a problem worth solving?',text:'hello@example.com',buttonText:'Send an email'},
 gallery:{title:'Visual archive',items:['One','Two','Three']},
 container:{title:'Container'},
 columns2:{title:'Two-column layout'},
 columns3:{title:'Three-column layout'},
 bento:{title:'Bento grid'},
 tabs:{title:'Selected notes',items:['Process','Principles','Tools']},
 divider:{},spacer:{},footer:{title:'Alex Morgan',text:'Built with Portfolio Studio'},
 video:{title:'Project reel',text:'Add a video URL in the inspector'},
 scene3d:{title:'Interactive orbit',text:'Lightweight 3D-style scene with reduced-motion fallback'},
 animatedBackground:{title:'Animated atmosphere'},
};

export function createComponent(type,overrides={}){
 const id=globalThis.crypto?.randomUUID?.()||`component-${Date.now()}-${Math.random().toString(16).slice(2)}`;
 return{id,type,name:content[type]?.title||type,parentId:null,children:[],content:{...content[type]},styles:{...defaultStyles,...(['hero','scene3d'].includes(type)?{minHeight:420}:{})},responsive:{tablet:{padding:36,fontSize:17,columns:Math.min(2,defaultStyles.columns)},mobile:{padding:24,fontSize:16,columns:1},hideOn:[]},animation:{entrance:'fade-up',hover:'lift',duration:500,delay:0,disableMobile:false},ai:{prompt:'',lastSuggestion:null},visible:true,locked:false,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),...overrides};
}

export function initialTree(){
 return[createComponent('navbar'),createComponent('hero'),createComponent('about'),createComponent('skills'),createComponent('projects'),createComponent('contact'),createComponent('footer')];
}

export const allowedStyleKeys=['background','color','padding','margin','gap','radius','width','maxWidth','minHeight','opacity','borderWidth','borderColor','shadow','blur','columns','fontSize','fontWeight','align'];
export const allowedAnimationKeys=['entrance','hover','duration','delay','disableMobile'];
