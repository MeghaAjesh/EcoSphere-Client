import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://cdn.pixabay.com/photo/2023/03/13/20/13/button-7850698_1280.png'
              height='50'
              alt=''
              loading='lazy'
            />
            EcoSphere
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header