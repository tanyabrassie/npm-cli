import React from 'react';
import styled from 'styled-components';
import {Flex} from 'rebass';
import {space, colors} from '../../theme';

const Container = styled(Flex)`
  background-color: ${colors.purpleBlack};
  color: ${colors.white};
`;

const ContentWrapper = styled(Flex)`
  max-width: 640px;
`;

const Text = styled.p`
  line-height: 1.5;
  text-align: center;
`;

const featureTexts = [
  'Nunc malesuada suscipit enim at feugiat. Duis id mauris lectus. Donec a sagittis lectus.',
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, tetuer adipiscing elit, sed diam nonummy nibmod',
];

const featureTitles = [
  'Really Fast',
  'Easy to Use',
];

const DarkBlock = () => {
  return(
    <Container>
      <ContentWrapper px={space[2]} py={space[8]} m='auto' flexDirection='column'>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, tetuer adipiscing elit, sed diam nonummy nibmod
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, tetuer adipiscing elit, sed diam nonummy nibmod
        </Text>
      </ContentWrapper>
    </Container>
  );
}

export default DarkBlock;