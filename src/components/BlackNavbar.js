import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import styled from 'styled-components'
const BlackNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className='blackbg'>
    <Container>
    <Navbar.Toggle aria-controls="navbarScroll" className='fas fa-bars text-white ps-3' />
    <LinkContainer to="/">
      <Navbar.Brand className='d-block d-lg-none'>
        <Image src={process.env.PUBLIC_URL + '/images/Logo (1).svg'} className = "img-fluid mobileview"/></Navbar.Brand>
        </LinkContainer>
      {/* <Image className='ps-2 p-lg-4 d-block d-lg-none' src={process.env.PUBLIC_URL + '/images/Vector (2).svg'}/>
        <Image className='ps-2 p-lg-4 d-block d-lg-none' src={process.env.PUBLIC_URL + '/images/Group (1).svg'}/> */}
      <Navbar.Collapse id="navbarScroll">
        <Nav className="m-auto my-2 maxheight navlinks my-lg-0" navbarScroll >
        <LinkContainer to="/">
      <Navbar.Brand className='d-none d-lg-block'>
        <Image src={process.env.PUBLIC_URL + '/images/Logo (1).svg'} className = "img-fluid mobileview m-auto"/></Navbar.Brand>
        </LinkContainer>
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Features</Nav.Link>
          <Nav.Link href="#action2"> Shop</Nav.Link>

          <LinkContainer to="/about">
          <Nav.Link> About us </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact_us">
          <Nav.Link>Contact us</Nav.Link>
  </LinkContainer>
        </Nav>
        {/* <Form className="d-flex">
        <SearchIcon className="text-white fas fa-search"></SearchIcon>
        </Form> */}
        <Image className='ps-4 d-none d-lg-block' src={process.env.PUBLIC_URL + '/images/Vector (7).svg'}/>
        <Image className='ps-4 d-none d-lg-block' src={process.env.PUBLIC_URL + '/images/bi_bag (1).svg'}/>
        <Image className='ps-4 d-none d-lg-block' src={process.env.PUBLIC_URL + '/images/Logo (4).svg'}/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )
}
const SearchIcon = styled.i`
@media (max-width: 768px){
      margin-left: 20px;
      margin-bottom: 15px;
}       
`
export default BlackNavbar
