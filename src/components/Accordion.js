import React from 'react';
import styled from 'styled-components';
import downCarrot from '../images/down-carrot.svg';
import upCarrot from '../images/up-carrot.svg';

const SectionButton = styled.button`
  outline: none;
  background-color: none;
  cursor: pointer;
  color: red;
  border: none;
  font-size: 18px;
  font-weight: bold;
  padding: 5px 0;
  transition: opacity .5s;

  &:after {
    background: url(${(props) => props.isOpen ? upCarrot : downCarrot});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    height: 11px;
    width: 28px;
    display: inline-block;
  }

  &:hover {
    opacity: .6;
  }
`;

class Accordion extends React.Component {
  state = {
    isOpen: true,
  };

  onHide = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return(
      <div>
        <SectionButton isOpen={this.state.isOpen} onClick={this.onHide}>{this.props.section}</SectionButton>
        {this.state.isOpen && 
          <>
            {this.props.children}
          </>
        }
      </div>
    );
  }
}

export default Accordion;