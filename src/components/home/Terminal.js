import React from 'react';
import styled from 'styled-components';
import {Flex, Box, Button as RebassButton} from 'rebass';
import closeX from '../../images/x.svg';
import Button from '../Button';

const TerminalBody = styled(Flex)`
  background-color: ${(props) => props.theme.colors.purpleBlack};
  border: 2px solid ${(props) => props.theme.colors.purpleBlack};
  border-radius: 2px;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 17px 1px #dc3bc180;
  transform: ${(props) => props.transform};
  max-width: 620px;
`;

const Top = styled(Flex)`
  background-color: ${(props) => props.theme.colors.white};
  height: 18px;
`;

const SiteName = styled(Flex)`
  font-size: 45px;
  font-family: 'Inconsolata', sans-serif;
  font-weight: 700;
  letter-spacing: 5px;
  text-shadow: 3px 2px 4px #abf1e04d;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 70px;
  }
`;

const Bottom = styled(Flex)`
  flex-direction: column;
  padding: 30px 50px;
`;

const Cursor = styled.span`
  color: ${(props) => props.theme.colors.red};
  text-shadow: none;
`;

const Bracket = styled.span`
  color: ${(props) => props.theme.colors.red};
  text-shadow: none;
`;

const Text = styled.strong`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 18px;
    line-height: 30px;
  }
`;

const ModalButton = styled(RebassButton)`
  cursor: pointer;
  background-image: url(${closeX});
  width: 14px;
  height: 14px;
  background-position: center;
  background-repeat: no-repeat;
`;  

const Terminal = ({onClose, xPosition, yPosition}) => {
  return(
    <TerminalBody m={'auto'} transform={`translate(${xPosition}, ${yPosition})`}>
      <Top alignItems="center">
        <ModalButton onClick={onClose} ml={1} p={1} />
      </Top>
      <Bottom>
        <SiteName py={3}><Bracket>></Bracket>npm cli <Cursor>_</Cursor></SiteName>
        <Text>
          The intelligent package manager for the Node Javascript Platform. Install stuff and get coding!
        </Text>
        <Box my={4}>
          <Button to="/">
            read docs
          </Button>
        </Box>
      </Bottom>
    </TerminalBody>
  );
};

export default Terminal;