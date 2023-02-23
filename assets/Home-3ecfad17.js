import{u as p,j as e}from"./main-d2baeab5.js";import{e as l,a as m,T as d}from"./antd-59c365fd.js";import{d as x,S as g}from"./dynamics-ef1ed27a.js";import{p as s}from"./principal_default-d1aea06c.js";import{P as h,T as a,F as j,L as f,C as t}from"./styles-60789ddd.js";import{s as n}from"./styled-components.browser.esm-3a1d7e2e.js";import"./react-f0d12c14.js";const u="/assets/home_title-510a9b1e.png",v=[{image:s,name:"张三"},{image:s,name:"张三"},{image:s,name:"张三"},{image:s,name:"张三"},{image:s,name:"张三"}],y=v,b="/assets/home-4e9a772c.jpg",T="/assets/home_project_bg-bed0c84b.png",k=n.div`
  /* overflow-x: hidden; */
`,W=n.div`
  height: 1029px;
  background-image: url(${b});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-size: cover;
`,_=n(h)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px;
    box-shadow: 0px 6px 30px 5px rgba(102, 120, 166, 0.06),
      0px 16px 24px 2px rgba(102, 120, 166, 0.04), 0px 8px 10px -5px rgba(102, 120, 166, 0.08);
    transform: translateY(-10px);
  }
`,P=n.div`
  height: 482px;
  background-image: url(${T});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,Y=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  text-indent: 2em;
  margin: 0 400px 116px;
`,{Title:r}=d;function S(){const o=x.slice(0,8),c=p();return e.jsxs(k,{children:[e.jsx(W,{children:e.jsx("img",{src:u,style:{width:"100%"}})}),e.jsx(a,{children:e.jsx(r,{level:1,children:"负责人介绍"})}),e.jsx(j,{children:y.map(i=>e.jsxs(_,{children:[e.jsx("img",{src:i.image,alt:""}),e.jsx("div",{className:"principalName",children:i.name}),e.jsx("div",{className:"introduction",children:"项目负责人"})]},i.image))}),e.jsxs(P,{children:[e.jsx(a,{children:e.jsx(r,{level:1,style:{margin:"0",paddingTop:"86px",paddingBottom:"73px"},children:"项目简介"})}),e.jsx(Y,{children:"本项目围绕“连续学习理论与方法”这一科学内涵，针对“抗灾难性遗忘的知识表达问题、数据受限下的知识增扩问题和人在回路中的知识修正问题”三个关键科学问题，以知识为主线，形成一整套连续学习的理论、模型和方法，并实现应用验证和测试评估。具体地，1）建立连续学习理论方法，实现连续学习过程中的知识表达、知识增扩及人在回路的模型能力成长，形成知识和数据相融合的连续学习理论和模型；2）发展连续学习关键技术，突破零样本和小样本条件下的连续学习关键技术，探索面向室内机器人、电子商务和智能交通的应用任务；3）构建连续学习评测体系，开源基准数据集和软件框架，验证连续学习模型性能。本项目在连续学习范式层面和人机协同层面上具有重要理论科学价值、在实际应用层面上具有重要意义。通过本项目的研究，有望在连续学习理论方面取得突破，并在应用层面上形成一系列相关任务的开源基准数据集、软件框架及评测标准，打造连续学习应用示范新标杆。"})]}),e.jsx(a,{children:e.jsx(r,{level:1,style:{margin:"126px 0 59px 0"},children:"新闻"})}),e.jsx("div",{style:{marginBottom:"164px"},children:o.map(i=>e.jsxs(f,{onClick:()=>c("/dynamics"),children:[e.jsxs(l,{size:"middle",children:[e.jsx(g,{}),e.jsx(t,{children:i.title})]}),e.jsxs(t,{children:[m(i.createTime).format("YYYY-MM-DD")," "]})]},i.id))})]})}export{S as default};
