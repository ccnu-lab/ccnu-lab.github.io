import {Typography, Space} from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import {useNavigate} from 'react-router';

import home_title from '@/assets/images/home_title.png';
import {ReactComponent as TrendIcon} from '@/assets/svg/trend_icon.svg';
const {Title} = Typography;
import dynamics from '@/constants/dynamics';
import principals from '@/constants/principals';
import {ListItem, TitleWrap, FlexWrap, ContentWrap} from '@/style/styles';

import {HomeWrap, ImageWrap, HomePrincipalBox, ProjectWrap, ProjectContentWrap} from './styles';

export default function Home() {
  const dynamicsTop8 = dynamics.slice(0, 8);
  const navigate = useNavigate();
  return (
    <HomeWrap>
      <ImageWrap>
        <img
          src={home_title}
          style={{
            width: '100%',
          }}
        />
      </ImageWrap>
      <TitleWrap>
        <Title level={1}>负责人介绍</Title>
      </TitleWrap>
      <FlexWrap>
        {principals.map((item) => (
          <HomePrincipalBox key={item.image}>
            <img src={item.image} alt="" />
            <div className="principalName">{item.name}</div>
            <div className="introduction">项目负责人</div>
          </HomePrincipalBox>
        ))}
      </FlexWrap>
      <ProjectWrap>
        <TitleWrap>
          <Title level={1} style={{margin: '0', paddingTop: '86px', paddingBottom: '73px'}}>
            项目简介
          </Title>
        </TitleWrap>
        <ProjectContentWrap>
          本项目围绕“连续学习理论与方法”这一科学内涵，针对“抗灾难性遗忘的知识表达问题、数据受限下的知识增扩问题和人在回路中的知识修正问题”三个关键科学问题，以知识为主线，形成一整套连续学习的理论、模型和方法，并实现应用验证和测试评估。具体地，1）建立连续学习理论方法，实现连续学习过程中的知识表达、知识增扩及人在回路的模型能力成长，形成知识和数据相融合的连续学习理论和模型；2）发展连续学习关键技术，突破零样本和小样本条件下的连续学习关键技术，探索面向室内机器人、电子商务和智能交通的应用任务；3）构建连续学习评测体系，开源基准数据集和软件框架，验证连续学习模型性能。本项目在连续学习范式层面和人机协同层面上具有重要理论科学价值、在实际应用层面上具有重要意义。通过本项目的研究，有望在连续学习理论方面取得突破，并在应用层面上形成一系列相关任务的开源基准数据集、软件框架及评测标准，打造连续学习应用示范新标杆。
        </ProjectContentWrap>
      </ProjectWrap>
      <TitleWrap>
        <Title level={1} style={{margin: '126px 0 59px 0'}}>
          新闻
        </Title>
      </TitleWrap>
      <div style={{marginBottom: '164px'}}>
        {dynamicsTop8.map((item) => (
          <ListItem key={item.id} onClick={() => navigate('/dynamics')}>
            <Space size={'middle'}>
              <TrendIcon />
              <ContentWrap>{item.title}</ContentWrap>
            </Space>
            <ContentWrap>{dayjs(item.createTime).format('YYYY-MM-DD')} </ContentWrap>
          </ListItem>
        ))}
      </div>
    </HomeWrap>
  );
}
