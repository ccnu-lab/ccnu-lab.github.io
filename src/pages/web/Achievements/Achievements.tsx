import {useSetState} from 'ahooks';
import {Space} from 'antd';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {useNavigate} from 'react-router';

import list_next from '@/assets/images/list_next.png';
import {ReactComponent as TrendIcon} from '@/assets/svg/trend_icon.svg';
import {CommonPage} from '@/component/UI/CommonPage';
import {CommonPagination} from '@/component/UI/CommonPagination';
import achievements from '@/constants/achievements';
import {ContentWrap, FlexWrap, ListItem} from '@/style/styles';

export default function Dynamics() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState({id: '', status: false});
  const [state, setState] = useSetState({
    page: 1,
    size: 10,
  });

  const achievementsData = achievements.slice((state.page - 1) * 10, state.size * state.page);
  return (
    <CommonPage titleName="成果展示" lineWidth="13%" initTitleOn={true}>
      <div style={{marginTop: '56px'}}>
        {achievementsData.map((item) => (
          <ListItem
            onMouseOver={() => setVisible({id: item.id, status: true})}
            onMouseLeave={() => setVisible({id: '', status: false})}
            key={item.id}
            onClick={() => navigate(`/achievements/${item.id}`)}
            style={{margin: '20px 6%', background: '#ffffff'}}
          >
            <Space size={'middle'}>
              <TrendIcon />
              <ContentWrap>{item.title}</ContentWrap>
            </Space>
            {visible.id === item.id && visible.status ? (
              <img src={list_next} />
            ) : (
              <ContentWrap>{dayjs(item.createTime).format('YYYY-MM-DD')} </ContentWrap>
            )}
          </ListItem>
        ))}
      </div>
      <FlexWrap>
        <CommonPagination
          pageSize={10}
          current={state.page}
          total={achievements.length || 0}
          onChange={(page: number, size: number) => setState({page, size})}
        />
      </FlexWrap>
    </CommonPage>
  );
}
