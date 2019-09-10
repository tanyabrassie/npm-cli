import React from 'react';
import Terminal from './Terminal';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 400px;
  width: 80%;
  margin: auto;
`;

class Windows extends React.Component {
  state = {
    showTopTerminal: true,
    showMiddleTerminal: true,
    showBottomTerminal: true,
  };
 
  render() {
    return(
      <Container>
        {this.state.showTopTerminal && 
          <Terminal 
            onClose={() => this.setState({showTopTerminal: false})}
            xPosition={'-8%'} 
            yPosition={'0%'}
          />
        }

        {this.state.showMiddleTerminal && 
          <Terminal 
            onClose={() => this.setState({showMiddleTerminal: false})}
            xPosition={'-4%'} 
            yPosition={'-90%'}
          />
        }

        {this.state.showBottomTerminal && 
          <Terminal
            onClose={() => this.setState({showBottomTerminal: false})}
            xPosition={'0%'} 
            yPosition={'-180%'}
          />
        }
      </Container>
    );
  }
}
 
export default Windows;