import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { Link } from 'react-router-dom';
import { bluebox } from '../../assets/Theming';

export const Builtwith = styled.td`
  font-size: 10pt;
  padding-left: 0.5rem;
  text-wrap: wrap;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${mq.tablet};
  margin-top: 60pt;
  padding: 10pt;
  flex-direction: column;
`;

export const HeaderTwo = styled.h2`
  font-size: 36pt;
  margin-bottom: 0;
`;

export const Icon = styled.img`
  height: 12pt;
  width: 12pt;
  padding: 2pt;
`;

export const StyledRow = styled.tr`
  height: 3em;
  &:not(:first-of-type):nth-of-type(odd){
    background-color: inherit;
  }
  &:not(:first-of-type):nth-of-type(even){
    background-color: #f7f8f8;
  }
  &:not(:first-of-type):hover{
    transition: 0.35s ease-in;
    color: #036;
    background-color: ${bluebox};
  }
`;

export const StyledData = styled.td`
  font-size: 12pt;
  text-wrap: wrap;
  padding-left: 0.5em;
`;

export const StyledLink = styled(Link)`
  &:nth-of-type(even){ margin: 0; }
  @media (min-width: ${mq.tablet}){
    margin: 0 5pt;
  }
`;

export const StyledTable = styled.table`
  margin-top: 3em;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.th`
  text-align: left;
  font-size: 18pt;
  padding-left: 0.5rem;
`;

export const SubHeader = styled.p`
  margin-top: 0.5em;
  color: #8686A3;
`;

export const ViewContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  min-height: 100svh;
  width: 100%;
`;
