import React from 'react';
import styled from 'styled-components';
import {colors} from '../../theme';

const ContentWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  background-color: ${colors.offWhite};
`;

const Hero = () => {
  return(
    <Container>
       <ContentWrapper>
      </ContentWrapper>
    </Container>  
  );
}

export default Hero;