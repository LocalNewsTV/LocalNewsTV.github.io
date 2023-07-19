import styled from '@emotion/styled';
import mq from '../../utilities/mq';

type HeaderProps = {
  menu: boolean;
}
export const HeaderCont = styled.header`
  position: fixed;
  box-sizing: border-box;
  z-index: 3;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 45pt;
  width: 100%;
  background-color: #DADADA;
  margin: 0;
  border-bottom: 1px solid black;
  @media (min-width: ${mq.mobile}){
    flex-direction: row;
    padding: 0 1.5em;
  }
`
export const MainCont = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(min-width: ${mq.mobile}){
    flex-direction: row;
    width: auto;
  }
`;
export const NavCont = styled.ul<HeaderProps>`
  display: ${(props) => props.menu ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  @media (min-width: ${mq.mobile}){
    display: flex;
    width: auto;
    flex-direction: row;
    justify-content: left;
  }
`;
export const NavItem = styled.li`
  display: flex;
  width: 65%;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 30pt;
  @media (max-width: ${mq.mobile}){
    border-top: 1px solid #b6b7b7;
    &:hover {
      transition: 0.5s ease-in;
      width: 100%;
      border-top: none;
      background-color: #b6b7b7
    }
    &:hover + li {
      transition: 0.5s ease-in;
      border-top: none;
    }
    &:last-child{
      padding-bottom: 5pt;
    }
  }
  @media (min-width: ${mq.mobile}){
    margin-left: 15pt;
    height: auto;
  }
`;
export const Logo = styled.img`
  height: 50pt;
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 1em;
  justify-content: center;
  @media (min-width: ${mq.mobile}){
    justify-content: flex-start;
    width: auto;
  }
`;
export const Title = styled.h1`
  font-family: 'Open Sans Variable', sans-serif;
  padding: 0;
  font-size: 22pt;
  color: #16161D;
  @media (min-width: ${mq.mobile}){
    font-size: 24pt;
  }
`;

export const Hamburger = styled.button`
  font-size: 20pt;
  color: #16161D;
  border: none;
  background: inherit;
  margin: 0 auto;
  @media(min-width: ${mq.mobile}){
    display: none;
  }
`;
