import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direcrion: column;
  height: 100vh;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

class Layout extends Component {
  render() {
    return (
      <Main>
        <ContentWrapper>{this.props.children}</ContentWrapper>
      </Main>
    );
  }
}

export default Layout;
