import React, {Component} from 'react';
import {
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  Button
} from 'reactstrap';

import HeaderDropdown from './HeaderDropdown';

class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar bg-light border-0 justify-content-between">
        <div style={{float: 'left', padding:'18px'}}>
          <Button color="light"><i className="fa fa-bars"></i></Button>
        </div>
        <h1 className="text-center">Savings</h1>
        <div>
          <Nav>
            <NavItem>
              <HeaderDropdown style={{padding: '0'}} accnt/>
            </NavItem>
          </Nav>
        </div>
      </header>
    );
  }
}

export default Header;
