import {Typography} from 'antd';
import React from 'react';

import tab_bg from '@/assets/images/tab_bg.png';
import {CardWrap, FlexWrap, TitleWrap} from '@/style/styles';

const {Title} = Typography;

export default function CommonDetail() {
  return (
    <FlexWrap>
      <img src={tab_bg} />
      <CardWrap>
        <TitleWrap style={{justifyContent: 'left'}}>
          <Title level={1} style={{margin: '0', padding: '77px 0 20px 76px'}}>
            详情页
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
    </FlexWrap>
  );
}
