import React from 'react';
import boxes from '../../images/background-boxes.svg';
import styled from 'styled-components';
import {Flex, Box} from 'rebass';

const Container = styled(Flex)`
  background: center / cover no-repeat url(${boxes}); 
  height: 380px;
 `;

const ContentWrapper = styled(Box)`
  align-content: center;
  width: 100%;
  text-align: center;
`;

const Footer = () => {
  return(
    <Container>
      <ContentWrapper py={4} mt={'auto'}>
        Footer Text 🤪
      </ContentWrapper>
    </Container>
  );
};

export default Footer;