import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DmM0KDA7.js";import{l as i,d as c,m as k}from"./styled-components.browser.esm-BwNI130S.js";const _=k`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,$=c.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 380px;
  min-width: 300px; /* Para evitar que sea más angosto inicialmente */
  animation: ${_} 0.3s ease-in-out;
  
  ${({type:e})=>e==="success"&&i`
      background: #28a745;
    `}

  ${({type:e})=>e==="error"&&i`
      background: #dc3545;
    `}

  ${({type:e})=>e==="warning"&&i`
      background: #ffc107;
      color: #333;
    `}
`,z=c.span`
  flex-grow: 1;
`,D=c.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
`,E=({message:e,type:j="success",duration:u=3e3,onClose:o})=>{const[S,p]=d.useState(!0);return d.useEffect(()=>{const C=setTimeout(()=>{p(!1),o&&o()},u);return()=>clearTimeout(C)},[u,o]),S?n.jsxs($,{type:j,children:[n.jsx(z,{children:e}),n.jsx(D,{onClick:()=>p(!1),children:"✖"})]}):null};E.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "error" | "warning"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"",defaultValue:{value:'"success"',computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const H={title:"Components/Toast",component:E,argTypes:{message:{control:"text",description:"Mensaje que se muestra en el toast"},type:{control:"select",options:["success","error","warning"],description:"Tipo de toast (success, error, warning)"},duration:{control:"number",description:"Duración en milisegundos antes de que el toast desaparezca"},onClose:{action:"closed",description:"Función que se ejecuta cuando el toast se cierra"}}},s={args:{message:"Operación exitosa",type:"success"}},r={args:{message:"Ha ocurrido un error",type:"error"}},a={args:{message:"Advertencia: acción requerida",type:"warning"}},t={args:{message:"Este toast durará 5 segundos",type:"success",duration:5e3}};var m,l,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    message: "Operación exitosa",
    type: "success"
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,x,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    message: "Ha ocurrido un error",
    type: "error"
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,b,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    message: "Advertencia: acción requerida",
    type: "warning"
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,h,q;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    message: "Este toast durará 5 segundos",
    type: "success",
    duration: 5000
  }
}`,...(q=(h=t.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};const I=["SuccessToast","ErrorToast","WarningToast","CustomDurationToast"];export{t as CustomDurationToast,r as ErrorToast,s as SuccessToast,a as WarningToast,I as __namedExportsOrder,H as default};
