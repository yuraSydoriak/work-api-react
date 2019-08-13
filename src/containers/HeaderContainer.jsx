import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";

class HeaderContainer extends Component {
  redirectToHandler = text => {
    const Text = text.toLowerCase();
    this.props.history.push(Text);
  };
  render() {
    return <Header redirect={this.redirectToHandler} />;
  }
}

export default withRouter(HeaderContainer);
