import React from 'react';
import {Card, Typography} from 'antd';
import styled from 'styled-components';
import tab_bg from '@/assets/images/tab_bg.png';
import principal_default from '@/assets/images/principal_default.png';
import {FlexWrap, TitleWrap, UnderLineWrap} from '@/style/styles';
import {PrincipalBox} from '@/pages/web/Home/styles';

const {Title} = Typography;

const FlexColumnWrap = styled(FlexWrap)`
  flex-direction: column;
`;

const FlexLeftWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PrincipalBoxWarp = styled(PrincipalBox)`
  margin-top: 60px;
  margin-bottom: 85px;
`;
const SubjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 769px;
  height: 219px;
  margin-top: 60px;
  margin-bottom: 119px;
  .title {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 10px;
  }
  .context {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    text-align: justify;
  }
`;
const CardWarp = styled(Card)`
  width: 1200px;
  margin-top: -103px;
  margin-bottom: 143px;
  padding-left: 60px;
  padding-top: 57px;
  padding-right: 12px;
  box-shadow: 0px 8px 12px 1px rgba(102, 120, 166, 0.03), 0px 5px 9px -3px rgba(102, 120, 166, 0.05);
`;

const subjectList = [
  {
    title: '课题1:连续学习的理论与模型',
    imgsrc: principal_default,
    leader: '张三',
    context:
      '从理论模型研究入手，聚焦多源异构数据的多重知识表达体系构建（研究内容1）、抗灾难性遗忘的稳健知识增扩（研究内容2）和人在回路的模型能力成长方法（研究内容3），旨在通过建立知识和数据相融合的连续学习理论模型，实现连续学习过程中的抗灾难性遗忘知识表达和稳健知识增扩，进而实现智能系统的主动模式探知和自主连续学习',
  },
  {
    title: '课题1:连续学习的理论与模型',
    imgsrc: principal_default,
    leader: '张三',
    context:
      '从理论模型研究入手，聚焦多源异构数据的多重知识表达体系构建（研究内容1）、抗灾难性遗忘的稳健知识增扩（研究内容2）和人在回路的模型能力成长方法（研究内容3），旨在通过建立知识和数据相融合的连续学习理论模型，实现连续学习过程中的抗灾难性遗忘知识表达和稳健知识增扩，进而实现智能系统的主动模式探知和自主连续学习',
  },
  {
    title: '课题1:连续学习的理论与模型',
    imgsrc: principal_default,
    leader: '张三',
    context:
      '从理论模型研究入手，聚焦多源异构数据的多重知识表达体系构建（研究内容1）、抗灾难性遗忘的稳健知识增扩（研究内容2）和人在回路的模型能力成长方法（研究内容3），旨在通过建立知识和数据相融合的连续学习理论模型，实现连续学习过程中的抗灾难性遗忘知识表达和稳健知识增扩，进而实现智能系统的主动模式探知和自主连续学习',
  },
  {
    title: '课题1:连续学习的理论与模型',
    imgsrc: principal_default,
    leader: '张三',
    context:
      '从理论模型研究入手，聚焦多源异构数据的多重知识表达体系构建（研究内容1）、抗灾难性遗忘的稳健知识增扩（研究内容2）和人在回路的模型能力成长方法（研究内容3），旨在通过建立知识和数据相融合的连续学习理论模型，实现连续学习过程中的抗灾难性遗忘知识表达和稳健知识增扩，进而实现智能系统的主动模式探知和自主连续学习',
  },
  {
    title: '课题1:连续学习的理论与模型',
    imgsrc: principal_default,
    leader: '张三',
    context:
      '从理论模型研究入手，聚焦多源异构数据的多重知识表达体系构建（研究内容1）、抗灾难性遗忘的稳健知识增扩（研究内容2）和人在回路的模型能力成长方法（研究内容3），旨在通过建立知识和数据相融合的连续学习理论模型，实现连续学习过程中的抗灾难性遗忘知识表达和稳健知识增扩，进而实现智能系统的主动模式探知和自主连续学习',
  },
];

export default function Subjects() {
  return (
    <FlexColumnWrap>
      <img src={tab_bg} />
      {subjectList.map((subject, index) => {
        return (
          <CardWarp key={index}>
            <TitleWrap style={{justifyContent: 'left'}}>
              <Title level={1} style={{margin: '0', padding: '0 0 20px 0'}}>
                {subject.title}
              </Title>
            </TitleWrap>
            <div>
              <UnderLineWrap style={{width: '405px'}} />
            </div>
            <FlexLeftWrap>
              <PrincipalBoxWarp>
                <img src={subject.imgsrc} alt="" />
                <div className="principalName">{subject.leader}</div>
                <div className="introduction">项目负责人</div>
              </PrincipalBoxWarp>
              <SubjectInfo>
                <div className="title">研究内容</div>
                <div className="context">{subject.context}</div>
              </SubjectInfo>
            </FlexLeftWrap>
          </CardWarp>
        );
      })}
    </FlexColumnWrap>
  );
}
