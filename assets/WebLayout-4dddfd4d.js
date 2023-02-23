import{W as p,j as e,L as l,p as x,u as h,a as g,O as u}from"./main-5e1262e9.js";import{r as m}from"./react-f0d12c14.js";import{s as n}from"./styled-components.browser.esm-3a1d7e2e.js";import{L as a,M as b,b as f,S as y}from"./antd-59c365fd.js";const j="/assets/bottom-3a6523e9.png",k="/assets/logo-7ba81912.png",{Content:L,Header:C}=a,W=e.jsx(f,{style:{fontSize:24},spin:!0}),w=n(y)`
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
  height: 80px;
  padding: 14px 360px;
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
`,o=n(a)`
  width: 100%;
  header,
  footer,
  main {
    width: 100%;
    margin: 0 auto;
  }
`,D=()=>{var i,r;const s=((i=p.find(t=>t.path==="/"))==null?void 0:i.children).map(t=>({key:t.path,label:e.jsx(l,{to:t.path,children:x[t.id]})})),c=h(),d=g();return e.jsxs(a,{style:{background:"white"},children:[e.jsx(o,{style:{background:"#eee"},children:e.jsx(v,{children:e.jsxs(z,{children:[e.jsx("img",{src:k,style:{height:"52px"},onClick:()=>c("/")}),e.jsx(b,{theme:"light",mode:"horizontal",selectedKeys:[((r=s.find(t=>t.key!=="/"&&d.pathname.includes(t.key)))==null?void 0:r.key)||"/"],items:s})]})})}),e.jsx(o,{style:{background:"transparent"},children:e.jsx(S,{children:e.jsx(m.Suspense,{fallback:e.jsx(w,{indicator:W,delay:1e3}),children:e.jsx(u,{})})})}),e.jsx(o,{style:{background:"#eee"},children:e.jsx(H,{})})]})};export{w as LoadingWrap,D as default};
