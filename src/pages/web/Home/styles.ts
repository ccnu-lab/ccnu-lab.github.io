import styled from 'styled-components';

import home from '@/assets/images/home.jpg';
import home_project_background from '@/assets/images/home_project_bg.png';
import {PrincipalBox} from '@/style/styles';

const HomeWrap = styled.div`
  /* overflow-x: hidden; */
`;

const ImageWrap = styled.div`
  height: 1029px;
  background-image: url(${home});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  background-size: cover;
`;

const HomePrincipalBox = styled(PrincipalBox)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px;
    box-shadow: 0px 6px 30px 5px rgba(102, 120, 166, 0.06),
      0px 16px 24px 2px rgba(102, 120, 166, 0.04), 0px 8px 10px -5px rgba(102, 120, 166, 0.08);
    transform: translateY(-10px);
  }
`;

const ProjectWrap = styled.div`
  height: 482px;
  background-image: url(${home_project_background});
  background-size: cover;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  text-indent: 2em;
  margin: 0 400px 116px;
`;

export {HomeWrap, ImageWrap, HomePrincipalBox, ProjectWrap, ProjectContentWrap};
