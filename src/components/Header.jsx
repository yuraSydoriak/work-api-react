import React from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

const Header = props => {
  const { redirect } = props;

  return (
    <Navbar>
      <Navbar.Group align={Alignment.RIGHT}>
        <Navbar.Heading>Working with API</Navbar.Heading>
        <Navbar.Divider />
        <Button
          className="bp3-minimal"
          icon="home"
          text="Home"
          onClick={() => redirect("/")}
        />
        <Button
          className="bp3-minimal"
          icon="chat"
          text="Posts"
          onClick={() => redirect("Posts")}
        />
        <Button
          className="bp3-minimal"
          icon="people"
          text="Contacts"
          onClick={() => redirect("Contacts")}
        />
      </Navbar.Group>
    </Navbar>
  );
};

export default Header;
