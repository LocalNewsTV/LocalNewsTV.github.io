import styled from '@emotion/styled';
import mq from '../../utilities/mq';

export const WeatherCont = styled.div`
  display: none;
  align-items: center;
  height: 100%;
  margin-left: auto;
  margin-right: 0.5em;
  justify-content: center;
  @media (min-width: ${mq.tablet}){
    display: flex;
  }
`;

export const WeatherP = styled.p`
  margin: 0;
  padding: 0;
`;

export const WeatherIcon = styled.img`
  display: flex;
  height: 100%;
  width: auto;
`;
export const TimeBox = styled.div`
  display: flex;
  min-width: 6rem;
  justify-content: right;
`;

export const WeatherBox= styled.div`
  align-items: center;
  justify-content: center;
`;
