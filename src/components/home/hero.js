import React from 'react';
import styled from 'styled-components';
import {colors, breakpoints, space} from '../../theme';
import Windows from './Windows';

const Container = styled.div`
  background-color: ${colors.offWhite};
  padding: ${space[5]}px ${space[2]}px ${space[10]}px;
  position: relative;

  @media screen and (min-width: ${breakpoints.TABLET}) {
    padding: ${space[5]}px ${space[2]}px 140px;
  }
`;

const Hero = () => {
  return(
    <Container>
      <Windows/>
    </Container>  
  );
}

export default Hero;