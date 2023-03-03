import{u as p,j as e}from"./main-6db0c1c8.js";import{e as x,a as m,T as g}from"./antd-59c365fd.js";import{r as h}from"./react-f0d12c14.js";import{S as f,l as j}from"./trend_icon-50c367a0.js";import{d as u}from"./dynamics-b9f026fd.js";import{p as t}from"./principal_default-d1aea06c.js";import{P as b,U as v,T as n,F as y,L as W,C as c}from"./styles-b55df970.js";import{s}from"./styled-components.browser.esm-3a1d7e2e.js";const k=[{id:1,image:t,name:"张三"},{id:2,image:t,name:"张三"},{id:3,image:t,name:"张三"},{id:4,image:t,name:"张三"},{id:5,image:t,name:"张三"}],w=k,T="/assets/home-4e9a772c.jpg",F="/assets/home_project_bg-bed0c84b.png",z=s.div`
  /* overflow-x: hidden; */
`,N=s.div`
  height: 1029px;
  background-image: url(${T});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: cover;
`,_=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  flex-direction: column;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(11, 90, 150, 0.9) 1.04%,
    rgba(6, 111, 192, 0.7) 45.31%,
    rgba(222, 233, 95, 0) 100%
  );
  background-blend-mode: saturation;
  .title {
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #ffffff;
    padding: 0 0 27px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .introduction {
    font-weight: 800;
    font-size: 60px;
    line-height: 73px;
    color: #ffffff;
    padding: 21px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`,C=s(b)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px;
    box-shadow: 0px 6px 30px 5px rgba(102, 120, 166, 0.06),
      0px 16px 24px 2px rgba(102, 120, 166, 0.04), 0px 8px 10px -5px rgba(102, 120, 166, 0.08);
    transform: translateY(-10px);
  }
`,P=s.div`
  height: 482px;
  background-image: url(${F});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,S=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  text-indent: 2em;
  margin: 0 400px 116px;
`,{Title:a}=g;function E(){const d=u.slice(0,8),l=p(),[r,o]=h.useState({id:"",status:!1});return e.jsxs(z,{children:[e.jsx(N,{children:e.jsxs(_,{children:[e.jsx("div",{className:"title",children:"科技创新2030—“新一代人工智能”重大项目"}),e.jsx(v,{lineColor:"#FFFFFF",lineWidth:"20%"}),e.jsx("div",{className:"introduction",children:"网站正在建设中......"})]})}),e.jsx(n,{children:e.jsx(a,{level:1,children:"负责人介绍"})}),e.jsx(y,{children:w.map(i=>e.jsxs(C,{children:[e.jsx("img",{src:i.image,alt:""}),e.jsx("div",{className:"principalName",children:i.name}),e.jsx("div",{className:"introduction",children:"项目负责人"})]},i.id))}),e.jsxs(P,{children:[e.jsx(n,{children:e.jsx(a,{level:1,style:{margin:"0",paddingTop:"86px",paddingBottom:"73px"},children:"项目简介"})}),e.jsx(S,{children:"本项目围绕“连续学习理论与方法”这一科学内涵，针对“抗灾难性遗忘的知识表达问题、数据受限下的知识增扩问题和人在回路中的知识修正问题”三个关键科学问题，以知识为主线，形成一整套连续学习的理论、模型和方法，并实现应用验证和测试评估。具体地，1）建立连续学习理论方法，实现连续学习过程中的知识表达、知识增扩及人在回路的模型能力成长，形成知识和数据相融合的连续学习理论和模型；2）发展连续学习关键技术，突破零样本和小样本条件下的连续学习关键技术，探索面向室内机器人、电子商务和智能交通的应用任务；3）构建连续学习评测体系，开源基准数据集和软件框架，验证连续学习模型性能。本项目在连续学习范式层面和人机协同层面上具有重要理论科学价值、在实际应用层面上具有重要意义。通过本项目的研究，有望在连续学习理论方面取得突破，并在应用层面上形成一系列相关任务的开源基准数据集、软件框架及评测标准，打造连续学习应用示范新标杆。"})]}),e.jsx(n,{children:e.jsx(a,{level:1,style:{margin:"126px 0 59px 0"},children:"新闻"})}),e.jsx("div",{style:{marginBottom:"164px"},children:d.map(i=>e.jsxs(W,{onMouseOver:()=>o({id:i.id,status:!0}),onMouseLeave:()=>o({id:"",status:!1}),onClick:()=>l("/dynamics"),children:[e.jsxs(x,{size:"middle",children:[e.jsx(f,{}),e.jsx(c,{children:i.title})]}),r.id===i.id&&r.status?e.jsx("img",{src:j}):e.jsxs(c,{children:[m(i.createTime).format("YYYY-MM-DD")," "]})]},i.id))})]})}export{E as default};
