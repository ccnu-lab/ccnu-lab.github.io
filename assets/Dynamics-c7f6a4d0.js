import{j as a,u as d}from"./main-d2baeab5.js";import{r as c}from"./react-f0d12c14.js";import{g,e as p,a as l}from"./antd-59c365fd.js";import{d as f,S as u}from"./dynamics-ef1ed27a.js";import{C as x}from"./CommonPage-97dc87ef.js";import{s as j}from"./styled-components.browser.esm-3a1d7e2e.js";import{L as h,C as m,F as S}from"./styles-60789ddd.js";import"./tab_bg-523399b6.js";const b=n=>typeof n=="function",y=n=>{const[e,s]=c.useState(n),i=c.useCallback(t=>{s(o=>{const r=b(t)?t(o):t;return r?Object.assign(Object.assign({},o),r):o})},[]);return[e,i]},C=y,k=j(g)`
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
`;function z({current:n,pageSize:e,total:s,onChange:i,style:t}){return a.jsx(k,{current:n,pageSize:e,onChange:i,total:s,showSizeChanger:!1,hideOnSinglePage:!0,style:t})}function F(){const n=d(),[e,s]=C({page:1,size:10}),i=f.slice((e.page-1)*10,e.size*e.page);return a.jsxs(x,{titleName:"新闻",lineWidth:"56px",initTitleOn:!0,children:[a.jsx("div",{style:{marginTop:"56px"},children:i.map(t=>a.jsxs(h,{onClick:()=>n(`/dynamics/${t.id}`),style:{margin:"20px 6%",background:"#ffffff"},children:[a.jsxs(p,{size:"middle",children:[a.jsx(u,{}),a.jsx(m,{children:t.title})]}),a.jsxs(m,{children:[l(t.createTime).format("YYYY-MM-DD")," "]})]},t.id))}),a.jsx(S,{children:a.jsx(z,{pageSize:10,current:e.page,total:f.length||0,onChange:(t,o)=>s({page:t,size:o})})})]})}export{F as default};
