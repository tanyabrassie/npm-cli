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
  letters-spacing: .3px;
  margin: 0 10px;
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

const Navbar = () => {
  return(
    <Container>
      <Box ml={1}>❤</Box>
      <Link><Logo src={cliLogo} /></Link>
      <Links>
        <NavLink>docs</NavLink>
        <NavLink>npmjs.org</NavLink>

      </Links>
    </Container>
  );
}

export default Navbar;