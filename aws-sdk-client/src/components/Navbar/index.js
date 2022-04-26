import React from 'react'
import{
    Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/create-instance' activeStyle>
              Create Instance
            </NavLink>
            <NavLink to='/start-instance' activeStyle>
              Start Instance
            </NavLink>
            <NavLink to='/stop-instance' activeStyle>
              Stop Instance
            </NavLink>
            <NavLink to='/list-instances' activeStyle>
              List Instances
            </NavLink>
            <NavLink to='/s3-buckets' activeStyle>
              S-3 Buckets
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/documentation'>Documentation</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;