import React from 'react';
import styled from 'styled-components';
import Windows from './Windows';
import {Flex} from 'rebass';

const Container = styled(Flex)`
  background-color: ${(props) => props.theme.colors.offWhite};
  position: relative;
`;

const Hero = () => {
  return(
    <Container px={1} pt={2} pb={[10, 10, '140px']}>
      <Windows/>
    </Container>  
  );
};

export default Hero;