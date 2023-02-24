import {useSetState} from 'ahooks';
import {Space} from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import {useNavigate} from 'react-router';

import {ReactComponent as TrendIcon} from '@/assets/svg/trend_icon.svg';
import {CommonPage} from '@/component/UI/CommonPage';
import {CommonPagination} from '@/component/UI/CommonPagination';
import dynamics from '@/constants/dynamics';
import {ContentWrap, FlexWrap, ListItem} from '@/style/styles';

export default function Dynamics() {
  const navigate = useNavigate();
  const [state, setState] = useSetState({
    page: 1,
    size: 10,
  });

  const dynamicsData = dynamics.slice((state.page - 1) * 10, state.size * state.page);
  return (
    <CommonPage titleName="新闻" lineWidth="6%" initTitleOn={true}>
      <div style={{marginTop: '56px'}}>
        {dynamicsData.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => navigate(`/dynamics/${item.id}`)}
            style={{margin: '20px 6%', background: '#ffffff'}}
          >
            <Space size={'middle'}>
              <TrendIcon />
              <ContentWrap>{item.title}</ContentWrap>
            </Space>
            <ContentWrap>{dayjs(item.createTime).format('YYYY-MM-DD')} </ContentWrap>
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
    </CommonPage>
  );
}
