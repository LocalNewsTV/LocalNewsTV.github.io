import styled from '@emotion/styled';
import mq from '../../utilities/mq';

export const SocialIcon = styled.img`
  height: 18pt;
  width: 18pt;
  margin: 8pt;
  &:hover {
    transition: 0.15s;
    transform: scale(1.2);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  @media(min-width: ${mq.mobile}){
    position: fixed;
    padding: 10pt;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: black;
    bottom: 0;
    min-height: 100svh;
    left: 0;
  }
`;
