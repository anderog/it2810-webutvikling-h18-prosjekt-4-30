import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import SkyLight from "react-skylight";

import SearchField from "./SearchField";

import "../styles/TitleBar.css";

class TitleBar extends React.Component {
  submit = values => {
    let obj = JSON.parse('{ "$search":' + JSON.stringify(values.search) + "}");
    console.log(obj);
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand className="title" href="/">
            POLUTFORSKER
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={() => this.simpleDialog.show()}>info</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <SearchField onSubmit={this.submit} />

        <SkyLight
          dialogStyles={{ backgroundColor: "#ecf0f1" }}
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Informasjon"
        >
          Her kan vi skrive informasjon om siden!
        </SkyLight>
      </div>
    );
  }
}

export default TitleBar;
