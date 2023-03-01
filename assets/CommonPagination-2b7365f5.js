import{r}from"./react-fcd6345f.js";import{s as f,j as c}from"./main-495018ab.js";import{g}from"./antd-6d5fccc9.js";const u=t=>typeof t=="function",m=t=>{const[o,a]=r.useState(t),e=r.useCallback(n=>{a(i=>{const s=u(n)?n(i):n;return s?Object.assign(Object.assign({},i),s):i})},[]);return[o,e]},x=m,p=f(g)`
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
`;function S({current:t,pageSize:o,total:a,onChange:e,style:n}){return c.jsx(p,{current:t,pageSize:o,onChange:e,total:a,showSizeChanger:!1,hideOnSinglePage:!0,style:n})}export{S as C,x as u};
