import React from 'react';
import styled from 'styled-components/macro';
import Img from '../assects/logo.svg';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
 
`;

const Nav = styled.nav`
  
`;

const NavLink = styled(Link)`
  
`;

const Search = styled.div`
  
`;

const SearchWrap = styled.div`
 
`;

const Input = styled.input`
  
`;

const ButtonContainer = styled.div`
  
`;

const Button = styled.div`
 
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/'>MARKET</NavLink>
          <NavLink to='/'>TRADE</NavLink>
          <NavLink to='/'>PRICING</NavLink>
          <NavLink to='/'>DOWNLOAD</NavLink>
          <NavLink to='/'>HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrap>
            <Input type='text' placeholder='Symbol/Name' />
          </SearchWrap>
        </Search>
        <ButtonContainer>
          <Button>
            SIGN UP
          </Button>
          <Button>
              LOG IN
          </Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
