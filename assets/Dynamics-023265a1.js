import{j as t,u as p}from"./main-7f9ed406.js";import{r as d}from"./react-f0d12c14.js";import{g as l,e as g,a as x,T as m}from"./antd-59c365fd.js";import{t as u}from"./tab_bg-f0938808.js";import{d as c,S as j}from"./dynamics-ee66bf94.js";import{s as h}from"./styled-components.browser.esm-3a1d7e2e.js";import{F as f,C as y,T as b,L as S}from"./styles-13a6a40e.js";const v=s=>typeof s=="function",C=s=>{const[a,n]=d.useState(s),i=d.useCallback(e=>{n(o=>{const r=v(e)?e(o):e;return r?Object.assign(Object.assign({},o),r):o})},[]);return[a,i]},T=C,k=h(l)`
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
`;function z({current:s,pageSize:a,total:n,onChange:i,style:e}){return t.jsx(k,{current:s,pageSize:a,onChange:i,total:n,showSizeChanger:!1,hideOnSinglePage:!0,style:e})}const{Title:w}=m;function O(){const s=p(),[a,n]=T({page:1,size:10}),i=c.slice((a.page-1)*10,a.size*a.page);return t.jsxs(f,{children:[t.jsx("img",{src:u}),t.jsxs(y,{children:[t.jsx(b,{style:{justifyContent:"left"},children:t.jsx(w,{level:1,style:{margin:"0",padding:"77px 0 20px 76px"},children:"新闻"})}),t.jsx("div",{style:{padding:"0 56px 0 76px"},children:t.jsx("div",{style:{width:"64px",border:"1px solid #000000"}})}),t.jsx("div",{style:{marginTop:"56px"},children:i.map(e=>t.jsxs(S,{onClick:()=>s(`/dynamics/${e.id}`),style:{margin:"20px 6%",background:"#ffffff"},children:[t.jsxs(g,{size:"middle",children:[t.jsx(j,{}),t.jsx("div",{children:e.title})]}),t.jsx("div",{children:x(e.createTime).format("YYYY-MM-DD")})]},e.id))}),t.jsx(f,{children:t.jsx(z,{pageSize:10,current:a.page,total:c.length||0,onChange:(e,o)=>n({page:e,size:o})})})]})]})}export{O as default};
