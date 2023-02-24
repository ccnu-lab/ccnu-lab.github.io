import {Space} from 'antd';
import React from 'react';
import {useNavigate, useParams, useLocation} from 'react-router';

import back from '@/assets/images/back.png';
import next from '@/assets/images/next.png';
import page_return from '@/assets/images/page_return.png';
import {CommonPage} from '@/component/UI/CommonPage';
import achievements from '@/constants/achievements';
import dynamics from '@/constants/dynamics';
import {CardWrap, ContentWrap, UnderLineWrap} from '@/style/styles';

export default function CommonDetail() {
  const {id} = useParams();
  const moduleName = useLocation().pathname.split('/')[1];
  // get dynamics
  let data = dynamics,
    indexValue = 0;
  // get achievements
  if (moduleName === 'achievements') {
    data = achievements;
  }
  const detail = data.find((item, index) => {
    indexValue = index;
    return item.id === id;
  });
  const backPath =
    indexValue - 1 < 0
      ? `/${moduleName}`
      : `/${moduleName}/${
          data.find((i, index) => {
            return index === indexValue - 1;
          })?.id
        }`;
  const nextPath =
    indexValue + 1 > data.length - 1
      ? `/${moduleName}`
      : `/${moduleName}/${
          data.find((i, index) => {
            return index === indexValue + 1;
          })?.id
        }`;
  const navigate = useNavigate();
  return (
    <CommonPage initTitleOn={false}>
      <CardWrap style={{minHeight: '300px'}}>
        <div style={{padding: '0 5%'}}>
          <Space
            size={'small'}
            onClick={() => navigate(`/${moduleName}`)}
            style={{cursor: 'pointer'}}
          >
            <img src={page_return} />
            <div style={{color: '#B0B0B0', fontSize: '14px'}}>返回</div>
          </Space>
        </div>
        <ContentWrap
          style={{fontSize: '24px', lineHeight: '29px', paddingTop: '32px', display: 'flex'}}
        >
          {detail?.title}
        </ContentWrap>
        <div style={{padding: '20px 5% 56px'}}>
          <UnderLineWrap lineColor="#D6D6D6" />
        </div>
        <ContentWrap style={{padding: '0 5%', display: 'flex'}}>{detail?.content}</ContentWrap>
        <div
          style={{
            marginBottom: '127px',
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '170px',
            cursor: 'pointer',
          }}
        >
          <Space size={'small'} onClick={() => navigate(`${backPath}`)}>
            <img src={back} />
            <div style={{fontSize: '16px'}}>上一篇</div>
          </Space>
          <Space size={'small'} onClick={() => navigate(`${nextPath}`)}>
            <img src={next} />
            <div style={{fontSize: '16px'}}>下一篇</div>
          </Space>
        </div>
      </CardWrap>
    </CommonPage>
  );
}
