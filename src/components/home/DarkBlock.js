import React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';

const Container = styled(Flex)`
  background-color: ${(props) => props.theme.colors.purpleBlack};
  color: ${(props) => props.theme.colors.white};
`;

const ContentWrapper = styled(Flex)`
  max-width: 640px;
`;

const Text = styled.p`
  line-height: 1.5;
  text-align: center;
`;

const DarkBlock = () => {
  return(
    <Container>
      <ContentWrapper px={2} py={6} m='auto' flexDirection='column'>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, tetuer adipiscing elit, sed diam nonummy nibmod
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, tetuer adipiscing elit, sed diam nonummy nibmod
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default DarkBlock;