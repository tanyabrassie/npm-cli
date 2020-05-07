import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import {Flex} from 'rebass';
import {FeatureLink} from '../links';
import rectangles from '../../images/background-rectangles.svg';
import terminalIcon from '../../images/terminal-icon.svg';
import networkIcon from '../../images/network-icon.svg';
import managerIcon from '../../images/manager-icon.svg';

const ContainerInner = styled(Flex)`
  background: linear-gradient(84deg, #fb881799, #ff4b0199, #c1212799, #e02aff99);
`;

const Container = styled.div`
  background: top / cover no-repeat url(${rectangles});
`;

const ContentWrapper = styled(Flex)`
  max-width: 640px;
`;

const featureTitles = {
  titleOne: 'Getting Started',
  titleTwo: 'Command Reference',
  titleThree: 'Using npm',
  titleFour: 'Publishing'
};

const featureTexts = {
  textOne: 'Download, install, and configure.',
  textTwo: 'All available npm commands.',
  textThree: 'How npm things work.',
  textFour: 'Publish your own public or private packages to the registry.'
};

const Features = () => {
  return (
    <Container>
      <ContainerInner>
        <ContentWrapper m='auto' py={5} flexDirection='column'>
          <FeatureLink to={'/docs/configuring-npm/install'}>
            <FeatureCard
              icon={terminalIcon}
              title={featureTitles.titleOne}
              text={featureTexts.textOne}
            />
          </FeatureLink>
          <FeatureLink to={'/docs/cli-commands/npm'}>
            <FeatureCard
              icon={managerIcon}
              title={featureTitles.titleTwo}
              text={featureTexts.textTwo}
            />
          </FeatureLink>
          <FeatureLink to={'/docs/using-npm/coding-style'}>
            <FeatureCard
              icon={networkIcon}
              title={featureTitles.titleThree}
              text={featureTexts.textThree}
            />
          </FeatureLink>
          <FeatureLink to={'https://www.npmjs.com/products'}>
            <FeatureCard
              icon={networkIcon}
              title={featureTitles.titleFour}
              text={featureTexts.textFour}
            />
          </FeatureLink>
        </ContentWrapper>
      </ContainerInner>
    </Container>
  );
};

export default Features;