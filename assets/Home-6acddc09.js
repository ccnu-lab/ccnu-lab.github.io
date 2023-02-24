import{u as d,j as e}from"./main-228c420f.js";import{e as m,a as x,T as g}from"./antd-59c365fd.js";import{r as h}from"./react-f0d12c14.js";import{S as j,l as u}from"./trend_icon-50c367a0.js";import{d as f}from"./dynamics-b9f026fd.js";import{p as i}from"./principal_default-d1aea06c.js";import{P as v,T as t,F as b,L as y,C as c}from"./styles-1532d54f.js";import{s as a}from"./styled-components.browser.esm-3a1d7e2e.js";const T="/assets/home_title-510a9b1e.png",_=[{image:i,name:"张三"},{image:i,name:"张三"},{image:i,name:"张三"},{image:i,name:"张三"},{image:i,name:"张三"}],k=_,W="/assets/home-4e9a772c.jpg",P="/assets/home_project_bg-bed0c84b.png",Y=a.div`
  /* overflow-x: hidden; */
`,w=a.div`
  height: 1029px;
  background-image: url(${W});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-size: cover;
`,z=a(v)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px;
    box-shadow: 0px 6px 30px 5px rgba(102, 120, 166, 0.06),
      0px 16px 24px 2px rgba(102, 120, 166, 0.04), 0px 8px 10px -5px rgba(102, 120, 166, 0.08);
    transform: translateY(-10px);
  }
`,B=a.div`
  height: 482px;
  background-image: url(${P});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`,C=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  text-indent: 2em;
  margin: 0 400px 116px;
`,{Title:n}=g;function E(){const p=f.slice(0,8),l=d(),[r,o]=h.useState({id:"",status:!1});return e.jsxs(Y,{children:[e.jsx(w,{children:e.jsx("img",{src:T,style:{width:"100%"}})}),e.jsx(t,{children:e.jsx(n,{level:1,children:"负责人介绍"})}),e.jsx(b,{children:k.map(s=>e.jsxs(z,{children:[e.jsx("img",{src:s.image,alt:""}),e.jsx("div",{className:"principalName",children:s.name}),e.jsx("div",{className:"introduction",children:"项目负责人"})]},s.image))}),e.jsxs(B,{children:[e.jsx(t,{children:e.jsx(n,{level:1,style:{margin:"0",paddingTop:"86px",paddingBottom:"73px"},children:"项目简介"})}),e.jsx(C,{children:"本项目围绕“连续学习理论与方法”这一科学内涵，针对“抗灾难性遗忘的知识表达问题、数据受限下的知识增扩问题和人在回路中的知识修正问题”三个关键科学问题，以知识为主线，形成一整套连续学习的理论、模型和方法，并实现应用验证和测试评估。具体地，1）建立连续学习理论方法，实现连续学习过程中的知识表达、知识增扩及人在回路的模型能力成长，形成知识和数据相融合的连续学习理论和模型；2）发展连续学习关键技术，突破零样本和小样本条件下的连续学习关键技术，探索面向室内机器人、电子商务和智能交通的应用任务；3）构建连续学习评测体系，开源基准数据集和软件框架，验证连续学习模型性能。本项目在连续学习范式层面和人机协同层面上具有重要理论科学价值、在实际应用层面上具有重要意义。通过本项目的研究，有望在连续学习理论方面取得突破，并在应用层面上形成一系列相关任务的开源基准数据集、软件框架及评测标准，打造连续学习应用示范新标杆。"})]}),e.jsx(t,{children:e.jsx(n,{level:1,style:{margin:"126px 0 59px 0"},children:"新闻"})}),e.jsx("div",{style:{marginBottom:"164px"},children:p.map(s=>e.jsxs(y,{onMouseOver:()=>o({id:s.id,status:!0}),onMouseLeave:()=>o({id:"",status:!1}),onClick:()=>l("/dynamics"),children:[e.jsxs(m,{size:"middle",children:[e.jsx(j,{}),e.jsx(c,{children:s.title})]}),r.id===s.id&&r.status?e.jsx("img",{src:u}):e.jsxs(c,{children:[x(s.createTime).format("YYYY-MM-DD")," "]})]},s.id))})]})}export{E as default};
