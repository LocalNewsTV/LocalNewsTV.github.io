/**
 * @desc   Header component for the Portfolio Website
 * @author LocalNewsTV
 */
import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { Banner, HeaderCont, MainCont, Logo, Title, NavCont, NavItem, Hamburger, MenuImg, AccentSpan } from "./header.styles";
import { HashLink as Link } from 'react-router-hash-link';
import hamburger from '/Hamburger.svg';
import cancel from '/Cancel.svg';


type NavURLProps = {
  destination: string;
  num: string;
}

const NavURL = ({
  destination,
  num
}:NavURLProps) => (
  <NavItem>
    <AccentSpan>{num}&nbsp;</AccentSpan>
    <Link to={`#${destination.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      {destination}
    </Link>
  </NavItem>
);

/**
 * @desc Main component Portfolio Header
 */
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <HeaderCont>
      <MainCont>
        <Banner>
          <NavLink to="/">
            <Logo src="/Logo.png" alt="Matthew Logan Logo" />
          </NavLink>
          <NavLink to="/" style={{textDecoration: 'none'}}>
            <Title>Matthew&nbsp;Logan</Title>
          </NavLink>
          {pathname === '/' ?
          (<Hamburger
            menu={menu}
            onClick={() => setMenu(!menu)}
            aria-label="Hamburger Menu"
          >
            <MenuImg
              src={menu? cancel : hamburger}
              alt="Menu Button"
            />
          </Hamburger>)
          : <div style={{marginLeft: 'auto'}} />}
        </Banner>
        {pathname === '/'
        &&  <NavCont menu={menu}>
              <NavURL destination="About" num="01." />
              <NavURL destination="Experience" num="02." />
              <NavURL destination="Work" num="03." />
              <NavURL destination="Contact" num="04." />
            </NavCont>}
      </MainCont>
    </HeaderCont>
  );
}

export default Header;
