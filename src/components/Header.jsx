import React, { Component } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { withRouter } from "react-router-dom";

class Header extends Component {
  redirectToHandler = text => {
    const Text = text.toLowerCase();
    this.props.history.push(Text);
  };

  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading>Working with API</Navbar.Heading>
          <Navbar.Divider />
          <Button
            className="bp3-minimal"
            icon="home"
            text="Home"
            onClick={() => this.redirectToHandler("/")}
          />
          <Button
            className="bp3-minimal"
            icon="chat"
            text="Posts"
            onClick={() => this.redirectToHandler("Posts")}
          />
          <Button
            className="bp3-minimal"
            icon="people"
            text="Contacts"
            onClick={() => this.redirectToHandler("Contacts")}
          />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default withRouter(Header);
