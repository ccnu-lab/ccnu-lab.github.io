import {Card, Typography} from 'antd';
import React from 'react';
import styled from 'styled-components';

import tab_bg from '@/assets/images/tab_bg.png';
import {TitleWrap} from '@/style/styles';

const {Title} = Typography;

const DynamicsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardWrap = styled(Card)`
  margin: -103px 0 117px;
  height: 1382px;
  width: 1200px;
  background: #fbfdff;
`;

export default function CommonDetail() {
  return (
    <DynamicsWrap>
      <img src={tab_bg} />
      <CardWrap>
        <TitleWrap style={{justifyContent: 'left'}}>
          <Title level={1} style={{margin: '0', padding: '77px 0 20px 76px'}}>
            新闻
          </Title>
        </TitleWrap>
        <div style={{padding: '0 56px 0 76px'}}>
          <div
            style={{
              width: '64px',
              border: '1px solid #000000',
            }}
          />
        </div>
        <div>这里是详情页</div>
      </CardWrap>
    </DynamicsWrap>
  );
}
