import {Typography} from 'antd';
import React from 'react';

import tab_bg from '@/assets/images/tab_bg.jpg';
import {CardWrap, FlexWrap, TitleWrap, UnderLineWrap} from '@/style/styles';
interface Props {
  children: React.ReactNode;
  titleName?: string;
  lineWidth?: string;
  lineColor?: string;
  initTitleOn?: boolean;
}
const {Title} = Typography;

function CommonPage({children, titleName, lineWidth, lineColor, initTitleOn = false}: Props) {
  if (initTitleOn) {
    return (
      <FlexWrap>
        <img src={tab_bg} />
        <CardWrap>
          <TitleWrap style={{justifyContent: 'left'}}>
            <Title level={1} style={{margin: '0', padding: '77px 0 20px 80px'}}>
              {titleName}
            </Title>
          </TitleWrap>
          <div style={{padding: '0 56px 0 80px'}}>
            <UnderLineWrap lineWidth={lineWidth} lineColor={lineColor} />
          </div>
          {children}
        </CardWrap>
      </FlexWrap>
    );
  }
  return (
    <FlexWrap>
      <img src={tab_bg} />
      {children}
    </FlexWrap>
  );
}

export {CommonPage};
