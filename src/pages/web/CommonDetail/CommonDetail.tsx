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
  // get dynamic detail
  let detail = dynamics.find((item) => {
      return item.id === id;
    }),
    indexValue = dynamics.findIndex((item) => {
      return item.id === id;
    }),
    backIndex =
      indexValue - 1 < 0
        ? '/dynamics'
        : `/dynamics/${
            dynamics.find((i, index) => {
              return index === indexValue - 1;
            })?.id
          }`,
    nextIndex =
      indexValue + 1 > dynamics.length - 1
        ? '/dynamics'
        : `/dynamics/${
            dynamics.find((i, index) => {
              return index === indexValue + 1;
            })?.id
          }`;
  // get achievement detail
  if (useLocation().pathname.split('/')[1] === 'achievements') {
    detail = achievements.find((item) => {
      return item.id === id;
    });
    indexValue = achievements.findIndex((item) => {
      return item.id === id;
    });
    backIndex =
      indexValue - 1 < 0
        ? '/achievements'
        : `/achievements/${
            achievements.find((i, index) => {
              return index === indexValue - 1;
            })?.id
          }`;
    nextIndex =
      indexValue + 1 > dynamics.length - 1
        ? '/achievements'
        : `/achievements/${
            dynamics.find((i, index) => {
              return index === indexValue + 1;
            })?.id
          }`;
  }
  const navigate = useNavigate();

  return (
    <CommonPage initTitleOn={false}>
      <CardWrap style={{minHeight: '300px'}}>
        <div style={{padding: '0 5%'}}>
          <Space size={'small'} onClick={() => navigate('/dynamics')} style={{cursor: 'pointer'}}>
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
          <Space size={'small'} onClick={() => navigate(`${backIndex}`)}>
            <img src={back} />
            <div style={{fontSize: '16px'}}>上一篇</div>
          </Space>
          <Space size={'small'} onClick={() => navigate(`${nextIndex}`)}>
            <img src={next} />
            <div style={{fontSize: '16px'}}>下一篇</div>
          </Space>
        </div>
      </CardWrap>
    </CommonPage>
  );
}
