import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./styled-components.browser.esm-BwNI130S.js";import"./index-DmM0KDA7.js";const l=i.div`
  width: 100%;
`,x=i.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,e=i.th`
  padding: 12px;
  text-align: ${r=>r.align||"left"};
  width: ${r=>r.width||"auto"};
  background-color: #f4f4f4;
  border-bottom: 2px solid #ddd;
`,d=i.td`
  padding: 12px;
  text-align: ${r=>r.align||"left"};
  width: ${r=>r.width||"auto"};
  border-bottom: 1px solid #ddd;
`,w={title:"Components/Table",component:l,argTypes:{}},t={render:()=>n.jsx(l,{children:n.jsxs(x,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx(e,{children:"Nombre"}),n.jsx(e,{align:"center",children:"Edad"}),n.jsx(e,{align:"right",children:"Ciudad"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx(d,{children:"Juan Pérez"}),n.jsx(d,{align:"center",children:"28"}),n.jsx(d,{align:"right",children:"Ciudad de México"})]}),n.jsxs("tr",{children:[n.jsx(d,{children:"María García"}),n.jsx(d,{align:"center",children:"34"}),n.jsx(d,{align:"right",children:"Guadalajara"})]}),n.jsxs("tr",{children:[n.jsx(d,{children:"Carlos López"}),n.jsx(d,{align:"center",children:"22"}),n.jsx(d,{align:"right",children:"Monterrey"})]})]})]})})},a={render:()=>n.jsx(l,{children:n.jsxs(x,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx(e,{width:"50%",children:"Nombre"}),n.jsx(e,{width:"25%",align:"center",children:"Edad"}),n.jsx(e,{width:"25%",align:"right",children:"Ciudad"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx(d,{width:"50%",children:"Juan Pérez"}),n.jsx(d,{width:"25%",align:"center",children:"28"}),n.jsx(d,{width:"25%",align:"right",children:"Ciudad de México"})]}),n.jsxs("tr",{children:[n.jsx(d,{width:"50%",children:"María García"}),n.jsx(d,{width:"25%",align:"center",children:"34"}),n.jsx(d,{width:"25%",align:"right",children:"Guadalajara"})]}),n.jsxs("tr",{children:[n.jsx(d,{width:"50%",children:"Carlos López"}),n.jsx(d,{width:"25%",align:"center",children:"22"}),n.jsx(d,{width:"25%",align:"right",children:"Monterrey"})]})]})]})})};var h,s,c;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th align="center">Edad</Th>
            <Th align="right">Ciudad</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Juan Pérez</Td>
            <Td align="center">28</Td>
            <Td align="right">Ciudad de México</Td>
          </tr>
          <tr>
            <Td>María García</Td>
            <Td align="center">34</Td>
            <Td align="right">Guadalajara</Td>
          </tr>
          <tr>
            <Td>Carlos López</Td>
            <Td align="center">22</Td>
            <Td align="right">Monterrey</Td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
}`,...(c=(s=t.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var o,T,g;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th width="50%">Nombre</Th>
            <Th width="25%" align="center">Edad</Th>
            <Th width="25%" align="right">Ciudad</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td width="50%">Juan Pérez</Td>
            <Td width="25%" align="center">28</Td>
            <Td width="25%" align="right">Ciudad de México</Td>
          </tr>
          <tr>
            <Td width="50%">María García</Td>
            <Td width="25%" align="center">34</Td>
            <Td width="25%" align="right">Guadalajara</Td>
          </tr>
          <tr>
            <Td width="50%">Carlos López</Td>
            <Td width="25%" align="center">22</Td>
            <Td width="25%" align="right">Monterrey</Td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
}`,...(g=(T=a.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const p=["DefaultTable","CustomWidthTable"];export{a as CustomWidthTable,t as DefaultTable,p as __namedExportsOrder,w as default};
