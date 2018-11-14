import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import SkyLight from "react-skylight";

import SearchField from "./SearchField";

import "../styles/TitleBar.css";

class TitleBar extends React.Component {
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

        <SearchField />

        <SkyLight
          dialogStyles={{ backgroundColor: "#ecf0f1" }}
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Informasjon"
        >
          Velkommen til Polutforsker! <br />
          Nettsiden er basert på Vinmonopolets database, som finnes
          <a href="https://www.vinmonopolet.no/datadeling" target="_blank">
            {" "}
            her.
          </a>
          <br /> <br />
          På denne siden er det funksjonalitet for å søke etter varenavn og noen
          populære varetyper. <br />
          <br />
          Søk på varenavn gjøres i søkefeltet, og returnerer alle produkter som
          inneholder minst ett av søkeordene. Varetype kan velges ved å trykke
          på «+»-symbolet.
          <br />
          <br />
          Videre kan søkeresultatet sorteres ved med valgene i dropdown-menyen.
          <br />
          <br />
          Utvidet produktinformasjon kan vises ved å trykke på produktnavnet.
          Her er det også mulighet for å legge til (uendelig mange) reviews av
          det valgte produktet.
        </SkyLight>
      </div>
    );
  }
}

export default TitleBar;
