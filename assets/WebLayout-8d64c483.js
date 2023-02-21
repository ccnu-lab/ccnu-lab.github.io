import{W as p,j as e,L as l,p as x,u as h,a as g,O as u}from"./main-6bfb73c2.js";import{r as m}from"./react-f0d12c14.js";import{s as n}from"./styled-components.browser.esm-bb0544bf.js";import{L as s,M as f,b,S as y}from"./antd-028c88d2.js";const j="/assets/bottom-37d6f792.png",k="/assets/logo-62e2f8e0.png",{Content:L,Header:C}=s,W=e.jsx(b,{style:{fontSize:24},spin:!0}),w=n(y)`
  height: 99vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=n.div`
  box-shadow: 0px 1px 10px rgba(71, 90, 155, 0.02), 0px 4px 6px rgba(102, 120, 166, 0.04),
    0px 2px 6px -1px rgba(102, 120, 166, 0.05);
  position: fixed;
  top: 0;
  background: #f5f5f5;
  width: 100%;
  padding: 20px 360px 14px;
  z-index: 10;
`,z=n(C)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5 !important;
  padding-inline: 0 !important;
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
  letter-spacing: 0em;
  .ant-menu-light {
    background: #f5f5f5;
  }
  .ant-menu-light .ant-menu-item-selected a {
    color: #005a9f;
  }
  .ant-menu-horizontal {
    border-bottom: none;
  }
`,S=n(L)`
  padding: 30px 0;
`,H=n.div`
  background-image: url(${j});
  background-size: cover;
  background-repeat: no-repeat;
  height: 108px;
`,o=n(s)`
  width: 100%;
  header,
  footer,
  main {
    width: 100%;
    margin: 0 auto;
  }
`,D=()=>{var i,r;const a=((i=p.find(t=>t.path==="/"))==null?void 0:i.children).map(t=>({key:t.path,label:e.jsx(l,{to:t.path,children:x[t.id]})})),d=h(),c=g();return e.jsxs(s,{style:{background:"white"},children:[e.jsx(o,{style:{background:"#eee"},children:e.jsx(v,{children:e.jsxs(z,{children:[e.jsx("img",{src:k,style:{height:"52px"},onClick:()=>d("/")}),e.jsx(f,{theme:"light",mode:"horizontal",selectedKeys:[((r=a.find(t=>t.key!=="/"&&c.pathname.includes(t.key)))==null?void 0:r.key)||"/"],items:a})]})})}),e.jsx(o,{style:{background:"transparent"},children:e.jsx(S,{children:e.jsx(m.Suspense,{fallback:e.jsx(w,{indicator:W,delay:1e3}),children:e.jsx(u,{})})})}),e.jsx(o,{style:{background:"#eee"},children:e.jsx(H,{})})]})};export{w as LoadingWrap,D as default};
