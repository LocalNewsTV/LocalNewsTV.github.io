/**
 * @desc   Styled Components for the Home page
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import { section } from '../../../assets/Theming';

export const HR = styled.hr`
  width: 35%;
  max-width: 450pt;
  color: #F5F5F5;
`;

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  align-items: center;
  width: 100%;
  background-color: ${section};
`;
