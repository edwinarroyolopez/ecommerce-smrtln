import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./styled-components.browser.esm-BwNI130S.js";import"./index-DmM0KDA7.js";const b=r.div`
  position: fixed;
  top: 0;
  right: ${({isOpen:o})=>o?"0":"-100%"};
  width: 320px;
  height: 100vh;
  background: var(--primary-text-color);
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.15);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`,f=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--secondary-border-color);
  background: var(--primary-color);
  color: var(--primary-text-color);
`,v=r.h2`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`,C=r.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--primary-text-color);
`,y=r.div`
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  background: var(--background-color);
  color: var(--text-color);
`,j=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,w=({isOpen:o,onClose:i,title:s,children:D})=>e.jsxs(e.Fragment,{children:[e.jsxs(b,{isOpen:o,children:[e.jsxs(f,{children:[s&&e.jsx(v,{children:s}),e.jsx(C,{onClick:i,children:"✖"})]}),e.jsx(y,{children:D})]}),o&&e.jsx(j,{onClick:i})]});w.__docgenInfo={description:"",methods:[],displayName:"Drawer"};const z={title:"Components/Drawer",component:w,argTypes:{isOpen:{control:"boolean",description:"Controla si el Drawer está abierto o cerrado"},onClose:{action:"closed",description:"Función que se ejecuta al cerrar el Drawer"},title:{control:"text",description:"Título del Drawer"},children:{control:"text",description:"Contenido del Drawer"}}},t={args:{isOpen:!0,title:"Título del Drawer",children:"Contenido del Drawer"}},n={args:{isOpen:!0,children:"Contenido del Drawer sin título"}},a={args:{isOpen:!1,title:"Drawer Cerrado",children:"Este contenido no será visible"}};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: "Título del Drawer",
    children: "Contenido del Drawer"
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: "Contenido del Drawer sin título"
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var m,g,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    title: "Drawer Cerrado",
    children: "Este contenido no será visible"
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const E=["DefaultDrawer","WithoutTitle","ClosedDrawer"];export{a as ClosedDrawer,t as DefaultDrawer,n as WithoutTitle,E as __namedExportsOrder,z as default};
