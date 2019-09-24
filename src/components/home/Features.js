import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import testIcon from '../../images/test-icon.svg';
import {Flex} from 'rebass';

const Container = styled(Flex)`
  background: linear-gradient(84deg, #fb881799, #ff4b0199, #c1212799, #e02aff99);
`;

const ContentWrapper = styled(Flex)`
  max-width: 640px;
`;

const featureTexts = {
  textOne: 'Nunc malesuada suscipit enim at feugiat. Duis id mauris lectus. Donec a sagittis lectus.',
  textTwo: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, tetuer adipiscing elit, sed diam nonummy nibmod',
};

const featureTitles = {
  titleOne: 'Really Fast',
  titleTwo: 'Easy to Use',
};

const Features = () => {
  return(
    <Container>
      <ContentWrapper m='auto' py={5} flexDirection='column'>
        <FeatureCard 
          icon={testIcon} 
          title={featureTitles.titleOne}
          text={featureTexts.textOne}
        />
        <FeatureCard 
          icon={testIcon} 
          title={featureTitles.titleTwo}
          text={featureTexts.textTwo}
        />
        <FeatureCard 
          icon={testIcon} 
          title={featureTitles.titleOne}
          text={featureTexts.textOne}
        />
      </ContentWrapper>
    </Container>
  );
};

export default Features;