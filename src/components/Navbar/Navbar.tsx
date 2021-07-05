import React, { useState, useCallback, useEffect } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Hamburger,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = useCallback(() => {
    setClick(!click);
  }, [click]);

  const showButton = useCallback(() => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, []);

  useEffect(() => {
    showButton();

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, [showButton]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              SUPER
            </NavLogo>

            <Hamburger onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </Hamburger>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button primary fontBig>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
