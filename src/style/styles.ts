import {Card} from 'antd';
import styled from 'styled-components';

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  height: 82px;
  position: relative;
  &:hover {
    background: #ecf5ff !important;
    color: #005a9f;
    svg {
      path {
        fill: #005a9f;
      }
    }
  }
  margin: 20px 15%;
  padding: 0 40px;
`;
const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    margin: 0;
  }
  .ant-typography {
    font-style: normal;
    font-weight: 800px;
    font-size: 32px;
    line-height: 39px;
    margin: 127px 0 82px 0;
  }
`;

const CardWrap = styled(Card)`
  margin: -103px 0 117px;
  height: 1382px;
  width: 1200px;
  background: #fbfdff;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const UnderLineWrap = styled.div<{lineColor?: string; lineWidth?: string}>`
  height: 1px;
  background-color: ${(props) => (props.lineColor ? props.lineColor : ' #000000')};
  width: ${(props) => (props.lineWidth ? props.lineWidth : '100%')};
`;

const ContentWrap = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  justify-content: center;
`;

export {ListItem, TitleWrap, FlexWrap, CardWrap, UnderLineWrap, ContentWrap};
