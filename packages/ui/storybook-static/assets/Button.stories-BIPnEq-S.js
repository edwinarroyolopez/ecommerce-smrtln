import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{d as b}from"./styled-components.browser.esm-BwNI130S.js";import"./index-DmM0KDA7.js";const x=b.button`
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.1s ease-in-out;
  background: ${r=>r.variant==="secondary"?"transparent":"var(--primary-color)"};

  color: ${r=>r.variant==="secondary"?"var(--primary-color)":"white"};
  
  border: 1px solid ${r=>r.variant==="secondary"?"var(--primary-color)":"var(--primary-text-color)"};
  
  outline: none;

  &:hover {
    background: ${r=>r.variant==="secondary"?"var(--primary-color)":"var(--primary-text-color)"};
    
    color: ${r=>r.variant==="secondary"?"white":"var(--primary-color)"};
    
    border: 1px solid var(--primary-color);
  }
`,u=({variant:r="primary",children:y,...v})=>g.jsx(x,{variant:r,...v,children:y});u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}}},composes:["ButtonHTMLAttributes"]};const S={title:"Components/Button",component:u,argTypes:{variant:{control:"radio",options:["primary","secondary"]},onClick:{action:"clicked"}}},a={args:{children:"Primary Button",variant:"primary"}},o={args:{children:"Secondary Button",variant:"secondary"}},e={args:{children:"Disabled Button",variant:"primary",disabled:!0}};var n,t,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary"
  }
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Disabled Button",
    variant: "primary",
    disabled: true
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const $=["Primary","Secondary","Disabled"];export{e as Disabled,a as Primary,o as Secondary,$ as __namedExportsOrder,S as default};
