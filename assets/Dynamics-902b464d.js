import{j as t,u as l}from"./main-017f6119.js";import{r as c}from"./react-f0d12c14.js";import{g,e as m,a as x,T as u}from"./antd-59c365fd.js";import{t as j}from"./tab_bg-523399b6.js";import{d,S as h}from"./dynamics-ee66bf94.js";import{s as y}from"./styled-components.browser.esm-3a1d7e2e.js";import{F as p,a as b,T as S,U as C,L as T,C as f}from"./styles-d09ea4fc.js";const k=s=>typeof s=="function",W=s=>{const[e,n]=c.useState(s),i=c.useCallback(a=>{n(o=>{const r=k(a)?a(o):a;return r?Object.assign(Object.assign({},o),r):o})},[]);return[e,i]},v=W,z=y(g)`
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
`;function w({current:s,pageSize:e,total:n,onChange:i,style:a}){return t.jsx(z,{current:s,pageSize:e,onChange:i,total:n,showSizeChanger:!1,hideOnSinglePage:!0,style:a})}const{Title:D}=u;function E(){const s=l(),[e,n]=v({page:1,size:10}),i=d.slice((e.page-1)*10,e.size*e.page);return t.jsxs(p,{children:[t.jsx("img",{src:j}),t.jsxs(b,{children:[t.jsx(S,{style:{justifyContent:"left"},children:t.jsx(D,{level:1,style:{margin:"0",padding:"77px 0 20px 80px"},children:"新闻"})}),t.jsx("div",{style:{padding:"0 56px 0 80px"},children:t.jsx(C,{style:{width:"64px"}})}),t.jsx("div",{style:{marginTop:"56px"},children:i.map(a=>t.jsxs(T,{onClick:()=>s(`/dynamics/${a.id}`),style:{margin:"20px 6%",background:"#ffffff"},children:[t.jsxs(m,{size:"middle",children:[t.jsx(h,{}),t.jsx(f,{children:a.title})]}),t.jsxs(f,{children:[x(a.createTime).format("YYYY-MM-DD")," "]})]},a.id))}),t.jsx(p,{children:t.jsx(w,{pageSize:10,current:e.page,total:d.length||0,onChange:(a,o)=>n({page:a,size:o})})})]})]})}export{E as default};
