import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HeaderWeather } from "../HeaderWeather/HeaderWeather";
import { Banner, HeaderCont, MainCont, Logo, Title, NavCont, NavItem, Hamburger, MenuImg } from "./header.styles";
import hamburger from '/Hamburger.svg';
import cancel from '/Cancel.svg';

type NavURLProps = {destination: string}

const NavURL = ({destination}:NavURLProps) => (
  <NavItem>
    <NavLink to={`/${destination}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      {destination}
    </NavLink>
  </NavItem>
);

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <HeaderCont>
      <MainCont>
        <Banner>
          <Logo src="/Logo.png" alt="Matthew Logan Logo" />
          <Title>Matthew&nbsp;Logan</Title>
          <Hamburger
            menu={menu}
            onClick={() => setMenu(!menu)}
            aria-label="Hamburger Menu"
          >
            <MenuImg
              src={menu? cancel : hamburger}
              alt="Menu Button"
            />
          </Hamburger>
        </Banner>
        <NavCont menu={menu}>
          <NavItem>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </NavLink>
          </NavItem>
          <NavURL destination="About" />
          <NavURL destination="Contact" />
          <NavURL destination="Projects" />
          <NavURL destination="Resume" />
        </NavCont>
      </MainCont>
      <HeaderWeather />
    </HeaderCont>
  );
}

export default Header;
