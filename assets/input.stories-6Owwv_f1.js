import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as n}from"./styled-components.browser.esm-BwNI130S.js";import"./index-DmM0KDA7.js";const z=n.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`,C=n.label`
  font-size: 16px;
  font-weight: bold;
  color: var(--text-color, #333);
  text-align: left;
  transition: color 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`,D=n.input`
  padding: 10px;
  border: 1px solid var(--border-color, #ccc);
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: var(--primary-color);
  }

  &:focus + ${C} {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`,W=n.span`
  font-size: 12px;
  color: var(--error-color, red);
  font-weight: 500;
  text-align: left;
`,S=({label:c,error:l,...d})=>e.jsxs(z,{children:[c&&e.jsx(C,{htmlFor:d.id,children:c}),e.jsx(D,{...d}),l&&e.jsx(W,{children:l})]});S.__docgenInfo={description:"",methods:[],displayName:"Input"};const L={title:"Components/Input",component:S,argTypes:{label:{control:"text",description:"Etiqueta del campo de entrada"},error:{control:"text",description:"Mensaje de error"},placeholder:{control:"text",description:"Texto de marcador de posición"},type:{control:"select",options:["text","password","email","number"],description:"Tipo de campo de entrada"},disabled:{control:"boolean",description:"Deshabilitar el campo de entrada"}}},r={args:{placeholder:"Ingrese su texto aquí"}},o={args:{label:"Nombre",placeholder:"Ingrese su nombre"}},a={args:{label:"Correo electrónico",placeholder:"Ingrese su correo electrónico",error:"El correo electrónico es inválido"}},s={args:{label:"Campo deshabilitado",placeholder:"Este campo está deshabilitado",disabled:!0}},t={args:{label:"Contraseña",placeholder:"Ingrese su contraseña",type:"password"}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Ingrese su texto aquí"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Nombre",
    placeholder: "Ingrese su nombre"
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Correo electrónico",
    placeholder: "Ingrese su correo electrónico",
    error: "El correo electrónico es inválido"
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,w,y;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Campo deshabilitado",
    placeholder: "Este campo está deshabilitado",
    disabled: true
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var E,v,j;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Contraseña",
    placeholder: "Ingrese su contraseña",
    type: "password"
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const N=["Default","WithLabel","WithError","Disabled","PasswordInput"];export{r as Default,s as Disabled,t as PasswordInput,a as WithError,o as WithLabel,N as __namedExportsOrder,L as default};
