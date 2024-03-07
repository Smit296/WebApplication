import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'

const TopBar = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    
          <h6 className='text-light'>
          <MdLocalOffer className='text-warning'/>&nbsp; &nbsp;
              Free Home delivery on Order above 500/- 
            
            </h6>
      
    
      <Nav className="ms-auto">
        <LinkContainer to="/Home" activeClassName>
            <Nav.Link>Home</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/about" activeClassName>
            <Nav.Link>About Us</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/ContactUs" activeClassName>
        <Nav.Link >Contact Us</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/Policy" activeClassName>
        <Nav.Link>Terms and policy</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
    </Navbar>
    </>
  )
}

export default TopBar