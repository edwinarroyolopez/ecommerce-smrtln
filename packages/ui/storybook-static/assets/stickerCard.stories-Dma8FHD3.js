import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as t}from"./styled-components.browser.esm-BwNI130S.js";import"./index-DmM0KDA7.js";const I=({color:r="currentColor",width:o="7px",height:n="10px",...i})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:n,viewBox:"0 0 7 10",...i,children:e.jsx("path",{d:"M166.5,118.477a.454.454,0,0,0-.639,0l-2.115,2.108v-8.034a.452.452,0,0,0-.9,0v8.034l-2.115-2.112a.457.457,0,0,0-.639,0,.45.45,0,0,0,0,.636l2.883,2.862a.507.507,0,0,0,.142.094.431.431,0,0,0,.174.035.453.453,0,0,0,.316-.129l2.883-2.862A.442.442,0,0,0,166.5,118.477Z",transform:"translate(-159.962 -112.1)",fill:r})});I.__docgenInfo={description:"",methods:[],displayName:"IosArrowDown",props:{color:{defaultValue:{value:"'currentColor'",computed:!1},required:!1},width:{defaultValue:{value:"'7px'",computed:!1},required:!1},height:{defaultValue:{value:"'10px'",computed:!1},required:!1}}};const K=({color:r="currentColor",width:o="7px",height:n="10px",...i})=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:n,viewBox:"0 0 7 10",...i,children:e.jsx("path",{d:"M166.5,115.723a.454.454,0,0,1-.639,0l-2.115-2.108v8.034a.452.452,0,0,1-.9,0v-8.034l-2.115,2.112a.457.457,0,0,1-.639,0,.45.45,0,0,1,0-.636l2.883-2.862a.507.507,0,0,1,.142-.094.431.431,0,0,1,.174-.035.453.453,0,0,1,.316.129l2.883,2.862A.442.442,0,0,1,166.5,115.723Z",transform:"translate(-159.962 -112.1)",fill:r})});K.__docgenInfo={description:"",methods:[],displayName:"IosArrowUp",props:{color:{defaultValue:{value:"'currentColor'",computed:!1},required:!1},width:{defaultValue:{value:"'7px'",computed:!1},required:!1},height:{defaultValue:{value:"'10px'",computed:!1},required:!1}}};const A=t.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-bottom: 4px solid ${r=>r.color||"#000"};
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  max-width: 300px;
  min-width: 250px;
`,V=t.div`
  display: flex;
  align-items: center;
  margin-bottom: auto;
`,B=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 8px;
  background: rgba(243, 244, 246, 0.8);
  margin-right: 8px;
`,S=t.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 100%;
`,W=t.span`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
`,N=t.span`
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
`,m=t.span`
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${r=>r.up?"#03D3B5":"#FC6687"};
`,f=t.span`
  font-size: 14px;
  font-weight: normal;
  color: #6b7280;
`,z=t.a`
  font-size: 12px;
  font-weight: bold;
  color: #7c3aed;
  text-decoration: none;
  margin-top: 8px;
`,R=({titleTransKey:r,icon:o,color:n,price:i,indicator:d,indicatorText:p,note:u,link:x,linkText:_})=>e.jsxs(A,{color:n,children:[e.jsxs(V,{children:[e.jsx(B,{children:o}),e.jsxs(S,{children:[e.jsx(W,{children:r}),e.jsx(N,{children:i})]})]}),d==="up"&&e.jsxs(m,{up:!0,children:[e.jsx(K,{width:"9px",height:"11px"})," ",p,e.jsxs(f,{children:[" ",u]})]}),d==="down"&&e.jsxs(m,{children:[e.jsx(I,{width:"9px",height:"11px"})," ",p,e.jsxs(f,{children:[" ",u]})]}),x&&e.jsx(z,{href:x,target:"_blank",rel:"noreferrer",children:_})]});R.__docgenInfo={description:"",methods:[],displayName:"StickerCard",props:{titleTransKey:{required:!0,tsType:{name:"string"},description:""},subtitleTransKey:{required:!1,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},indicator:{required:!1,tsType:{name:"union",raw:'"up" | "down"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'}]},description:""},indicatorText:{required:!1,tsType:{name:"string"},description:""},note:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""},linkText:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Components/StickerCard",component:R,argTypes:{titleTransKey:{control:"text",description:"Texto del título"},icon:{control:"object",description:"Ícono del card"},color:{control:"color",description:"Color del borde inferior"},price:{control:"number",description:"Precio mostrado"},indicator:{control:"radio",options:["up","down"],description:"Indicador de tendencia (arriba o abajo)"},indicatorText:{control:"text",description:"Texto del indicador"},note:{control:"text",description:"Nota adicional"},link:{control:"text",description:"Enlace"},linkText:{control:"text",description:"Texto del enlace"}}},s={args:{titleTransKey:"Total Revenue",icon:e.jsx("span",{children:"💰"}),price:1e3,color:"#03D3B5"}},a={args:{titleTransKey:"Total Revenue",icon:e.jsx("span",{children:"💰"}),price:1e3,color:"#03D3B5",indicator:"up",indicatorText:"10%",note:"vs last month"}},l={args:{titleTransKey:"Total Revenue",icon:e.jsx("span",{children:"💰"}),price:1e3,color:"#FC6687",indicator:"down",indicatorText:"5%",note:"vs last month"}},c={args:{titleTransKey:"Total Revenue",icon:e.jsx("span",{children:"💰"}),price:1e3,color:"#7C3AED",link:"https://example.com",linkText:"View Details"}};var h,g,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#03D3B5"
  }
}`,...(T=(g=s.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var w,v,y;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#03D3B5",
    indicator: "up",
    indicatorText: "10%",
    note: "vs last month"
  }
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var j,b,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#FC6687",
    indicator: "down",
    indicatorText: "5%",
    note: "vs last month"
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var k,q,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    titleTransKey: "Total Revenue",
    icon: <span>💰</span>,
    price: 1000,
    color: "#7C3AED",
    link: "https://example.com",
    linkText: "View Details"
  }
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const M=["Default","WithUpIndicator","WithDownIndicator","WithLink"];export{s as Default,l as WithDownIndicator,c as WithLink,a as WithUpIndicator,M as __namedExportsOrder,L as default};
