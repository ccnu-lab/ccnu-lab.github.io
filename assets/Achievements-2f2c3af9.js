import{u as p,j as e}from"./main-02060672.js";import{u as d,C as f}from"./CommonPagination-1bca409c.js";import{e as u,a as x}from"./antd-59c365fd.js";import{r as g}from"./react-f0d12c14.js";import{S as h,l as j}from"./trend_icon-50c367a0.js";import{C as v}from"./CommonPage-52676144.js";import{a as r}from"./achievements-421e319c.js";import{L as C,C as o,F as S}from"./styles-1532d54f.js";import"./styled-components.browser.esm-3a1d7e2e.js";import"./tab_bg-523399b6.js";function E(){const n=p(),[a,i]=g.useState({id:"",status:!1}),[t,m]=d({page:1,size:10}),l=r.slice((t.page-1)*10,t.size*t.page);return e.jsxs(v,{titleName:"成果展示",lineWidth:"13%",initTitleOn:!0,children:[e.jsx("div",{style:{marginTop:"56px"},children:l.map(s=>e.jsxs(C,{onMouseOver:()=>i({id:s.id,status:!0}),onMouseLeave:()=>i({id:"",status:!1}),onClick:()=>n(`/achievements/${s.id}`),style:{margin:"20px 6%",background:"#ffffff"},children:[e.jsxs(u,{size:"middle",children:[e.jsx(h,{}),e.jsx(o,{children:s.title})]}),a.id===s.id&&a.status?e.jsx("img",{src:j}):e.jsxs(o,{children:[x(s.createTime).format("YYYY-MM-DD")," "]})]},s.id))}),e.jsx(S,{children:e.jsx(f,{pageSize:10,current:t.page,total:r.length||0,onChange:(s,c)=>m({page:s,size:c})})})]})}export{E as default};
