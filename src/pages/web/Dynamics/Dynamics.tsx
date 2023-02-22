import {useSetState} from 'ahooks';
import {Space, Typography} from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import {useNavigate} from 'react-router';

import tab_bg from '@/assets/images/tab_bg.png';
import {ReactComponent as TrendIcon} from '@/assets/svg/trend_icon.svg';
import {CommonPagination} from '@/component/UI/CommonPagination';
import dynamics from '@/constants/dynamics';
import {CardWrap, FlexWrap, ListItem, TitleWrap} from '@/style/styles';

const {Title} = Typography;

export default function Dynamics() {
  const navigate = useNavigate();
  const [state, setState] = useSetState({
    page: 1,
    size: 10,
  });

  const dynamicsData = dynamics.slice((state.page - 1) * 10, state.size * state.page);
  return (
    <FlexWrap>
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
        <div style={{marginTop: '56px'}}>
          {dynamicsData.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => navigate(`/dynamics/${item.id}`)}
              style={{margin: '20px 6%', background: '#ffffff'}}
            >
              <Space size={'middle'}>
                <TrendIcon />
                <div>{item.title}</div>
              </Space>
              <div>{dayjs(item.createTime).format('YYYY-MM-DD')}</div>
            </ListItem>
          ))}
        </div>
        <FlexWrap>
          <CommonPagination
            pageSize={10}
            current={state.page}
            total={dynamics.length || 0}
            onChange={(page: number, size: number) => setState({page, size})}
          />
        </FlexWrap>
      </CardWrap>
    </FlexWrap>
  );
}
