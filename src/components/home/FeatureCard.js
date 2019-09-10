import React from 'react';
import styled from 'styled-components';
import {Flex, Image, Box} from 'rebass';

const Card = styled(Flex)`
  background-color: #f2f2f2ab;
  box-shadow: 5px 5px 1px 1px ${(props) => props.theme.colors.red};
  border-radius: 2px;
`;

const Text = styled.p`
`;

const Title = styled.h2`
`;

const FeatureCard = ({icon, text, title, theme}) => {
  console.log(theme);
  return(
    <Card p={5} m={3}>
      <Image width={'125px'} src={icon}/>
      <Flex flexDirection='column' p={2}>
        <Box py={2}><Title>{title}</Title></Box>
        <Text>{text}</Text>
      </Flex>
    </Card>
  );
};

export default FeatureCard;