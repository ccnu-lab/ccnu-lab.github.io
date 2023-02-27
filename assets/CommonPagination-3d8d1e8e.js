import{r}from"./react-f0d12c14.js";import{j as f}from"./main-4e1cd931.js";import{s as c}from"./styled-components.browser.esm-3a1d7e2e.js";import{g}from"./antd-59c365fd.js";const u=t=>typeof t=="function",m=t=>{const[o,a]=r.useState(t),e=r.useCallback(n=>{a(i=>{const s=u(n)?n(i):n;return s?Object.assign(Object.assign({},i),s):i})},[]);return[o,e]},S=m,p=c(g)`
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
`;function j({current:t,pageSize:o,total:a,onChange:e,style:n}){return f.jsx(p,{current:t,pageSize:o,onChange:e,total:a,showSizeChanger:!1,hideOnSinglePage:!0,style:n})}export{j as C,S as u};
