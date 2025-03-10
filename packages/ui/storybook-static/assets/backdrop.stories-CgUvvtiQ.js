import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as b,m as h}from"./styled-components.browser.esm-BwNI130S.js";import"./index-DmM0KDA7.js";const y=h`
  from { opacity: 0; }
  to { opacity: 1; }
`,x=h`
  from { opacity: 1; }
  to { opacity: 0; }
`,g=b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({visible:e})=>e?"1":"0"};
  pointer-events: ${({visible:e})=>e?"auto":"none"};
  animation: ${({visible:e})=>e?y:x} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
`,k=({visible:e,onClick:v,children:f})=>r.jsx(g,{visible:e,onClick:v,children:f});k.__docgenInfo={description:"",methods:[],displayName:"Backdrop"};const j={title:"Components/Backdrop",component:k,argTypes:{visible:{control:"boolean",description:"Controla si el backdrop es visible o no"},onClick:{action:"clicked",description:"Función que se ejecuta al hacer clic en el backdrop"}}},o={args:{visible:!0,children:r.jsx("div",{style:{color:"white",fontSize:"24px"},children:"Contenido del Backdrop"})}},i={args:{visible:!1,children:r.jsx("div",{style:{color:"white",fontSize:"24px"},children:"Contenido del Backdrop"})}},n={args:{visible:!0,onClick:()=>alert("Backdrop clicked!"),children:r.jsx("div",{style:{color:"white",fontSize:"24px"},children:"Haz clic en el backdrop"})}};var t,c,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    visible: true,
    children: <div style={{
      color: "white",
      fontSize: "24px"
    }}>Contenido del Backdrop</div>
  }
}`,...(s=(c=o.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var a,d,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    visible: false,
    children: <div style={{
      color: "white",
      fontSize: "24px"
    }}>Contenido del Backdrop</div>
  }
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    visible: true,
    onClick: () => alert("Backdrop clicked!"),
    children: <div style={{
      color: "white",
      fontSize: "24px"
    }}>Haz clic en el backdrop</div>
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const w=["Visible","Hidden","WithClickHandler"];export{i as Hidden,o as Visible,n as WithClickHandler,w as __namedExportsOrder,j as default};
