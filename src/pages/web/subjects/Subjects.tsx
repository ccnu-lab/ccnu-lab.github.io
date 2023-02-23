import React from 'react';
import {Card, Typography} from 'antd';
import styled from 'styled-components';
import tab_bg from '@/assets/images/tab_bg.jpg';
import subjects from '@/constants/subjects';
import {FlexWrap, TitleWrap, UnderLineWrap,PrincipalBox} from '@/style/styles';

const {Title} = Typography;

const FlexColumnWrap = styled(FlexWrap)`
  flex-direction: column;
`;

const FlexLeftWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PrincipalBoxWarp = styled(PrincipalBox)`
  margin: 60px 29px 85px 0;
`;
const SubjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 769px;
  height: 219px;
  margin: 60px 0 119px 0;
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
  margin: -103px 0 143px 0;
  padding: 57px 0 0 60px;
  box-shadow: 0px 8px 12px 1px rgba(102, 120, 166, 0.03), 0px 5px 9px -3px rgba(102, 120, 166, 0.05);
`;



export default function Subjects() {
  return (
    <FlexColumnWrap>
      <img src={tab_bg} />
      {subjects.map((subject, index) => {
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
