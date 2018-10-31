import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import SkyLight from 'react-skylight';

import '../styles/TitleBar.css';

class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand className='title' href="/">POLUTFORSKER</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-info" onClick={() => this.simpleDialog.show()}>info</NavLink>
              </NavItem>
            </Nav>
        </Navbar>

        <SkyLight dialogStyles={{backgroundColor: '#ecf0f1'}} hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Informasjon">
          Her kan vi skrive informasjon om siden!
        </SkyLight>

      </div>
    );
  }
}

export default TitleBar;
