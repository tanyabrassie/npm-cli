import React from 'react';
import styled from 'styled-components';
import {Flex, Image, Box} from 'rebass';
import cliLogo from '../images/cli-logo.svg';
import {Link} from "gatsby";
import {colors} from '../theme';

const Container = styled(Flex)`
  border-top: 3px solid;
  border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
  max-width: 1600px;
  margin: auto;
  height: 50px;
  padding: 0 10px;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-family: 'Poppins';
  font-weight: 500;
  text-decoration: none;
  color: ${colors.black};
  letter-spacing: .3px;
  margin: 0 10px;
  font-size: 14px;
  transition: opacity .5s;

  &:hover {
    opacity: .5;
  }
`;

const Logo = styled(Image)`
  width: 120px;
  padding: 0px 10px;
  height: 20px;
  vertical-align: middle;
`;

const Links = styled.ul`
  margin-left: auto;
`;

const Heart = styled(Box)`
  font-size: 14px;
`;

const Navbar = () => {
  return(
    <Container>
      <Heart ml={1}>❤</Heart>
      <Link to="/"><Logo src={cliLogo} /></Link>
      <Links>
        <NavLink to="/">docs</NavLink>
        <NavLink to="/">npmjs.org</NavLink>

      </Links>
    </Container>
  );
}

export default Navbar;