import{j as e,u as d}from"./main-53af32c3.js";import{r as c}from"./react-f0d12c14.js";import{g,e as p,d as l}from"./antd-1e142849.js";import{d as f,S as u}from"./dynamics-ef1ed27a.js";import{C as x}from"./CommonPage-8dc3fcb7.js";import{s as j}from"./styled-components.browser.esm-60567542.js";import{L as h,C as m,F as S}from"./styles-c6336298.js";const b=n=>typeof n=="function",y=n=>{const[a,s]=c.useState(n),i=c.useCallback(t=>{s(o=>{const r=b(t)?t(o):t;return r?Object.assign(Object.assign({},o),r):o})},[]);return[a,i]},C=y,k=j(g)`
  position: absolute;
  bottom: 0;
  padding-bottom: 98px;
  .ant-pagination-item {
    background: #ffffff;
    border-radius: 3px;
    min-width: 32px;
    height: 32px;
    a {
      background: #ffffff;
      color: #424355;
    }
  }
  .ant-pagination-item-active {
    a {
      background: #005a9f;
      color: #ffffff;
    }
  }
  .ant-pagination-item-link {
    border: none;
  }
`;function z({current:n,pageSize:a,total:s,onChange:i,style:t}){return e.jsx(k,{current:n,pageSize:a,onChange:i,total:s,showSizeChanger:!1,hideOnSinglePage:!0,style:t})}function w(){const n=d(),[a,s]=C({page:1,size:10}),i=f.slice((a.page-1)*10,a.size*a.page);return e.jsxs(x,{titleName:"新闻",lineWidth:"56px",initTitleOn:!0,children:[e.jsx("div",{style:{marginTop:"56px"},children:i.map(t=>e.jsxs(h,{onClick:()=>n(`/dynamics/${t.id}`),style:{margin:"20px 6%",background:"#ffffff"},children:[e.jsxs(p,{size:"middle",children:[e.jsx(u,{}),e.jsx(m,{children:t.title})]}),e.jsxs(m,{children:[l(t.createTime).format("YYYY-MM-DD")," "]})]},t.id))}),e.jsx(S,{children:e.jsx(z,{pageSize:10,current:a.page,total:f.length||0,onChange:(t,o)=>s({page:t,size:o})})})]})}export{w as default};
