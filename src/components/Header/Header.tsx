import { useState } from "react";
import { HeaderWeather } from "../HeaderWeather/HeaderWeather";
import { Banner, HeaderCont, MainCont, Logo, Title, NavCont, NavItem, Hamburger } from "./header.styles";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <HeaderCont>
      <MainCont>
        <Banner>
          <Logo src="/Logo.png" alt="Matthew Logan Logo" />
          <Title>Matthew&nbsp;Logan</Title>
          <Hamburger
            onClick={() => setMenu(!menu)}
            aria-label="Hamburger Menu"
          >
            ☰
          </Hamburger>
        </Banner>
        <NavCont menu={menu}>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Contact</NavItem>
          <NavItem>Resume</NavItem>
        </NavCont>
      </MainCont>
      <HeaderWeather />
    </HeaderCont>
  );
}

export default Header;
