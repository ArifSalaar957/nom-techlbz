import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
function  Navigation () {
  return (
    <Navbar expand="lg" className='Navbg'>
    <Container>
    <Navbar.Toggle aria-controls="navbarScroll" className='fas fa-bars ps-3' />
      <Navbar.Brand href="#" className='d-block d-lg-none'><Image src={process.env.PUBLIC_URL + '/images/Logo.svg'} className = "img-fluid mobileview"/></Navbar.Brand>
      {/* <Image className='ps-2 p-lg-4 d-block d-lg-none' src={process.env.PUBLIC_URL + '/images/Vector (6).svg'}/>
        <Image className='ps-2 p-lg-4 d-block d-lg-none' src={process.env.PUBLIC_URL + '/images/Group.svg'}/> */}
      <Navbar.Collapse id="navbarScroll">
        <Nav className="m-auto my-2 maxheight my-lg-0" navbarScroll >
        <Navbar.Brand href="#" className='d-none d-lg-block'><Image src={process.env.PUBLIC_URL + '/images/Logo.svg'} className = "img-fluid mobileview d-block m-auto"/></Navbar.Brand>
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
        <Form className="d-flex">
        {/* <Input size="medium" placeholder="Search Here" prefix={<SearchOutlined />} className="navInput navSearch"
        /> */}
        </Form>
        <Image className='ps-4 d-none d-lg-block' src={process.env.PUBLIC_URL + '/images/Vector (6).svg'}/>
        <Image className='ps-4 d-none d-lg-block' src={process.env.PUBLIC_URL + '/images/bi_bag.svg'}/>
        <Image className='ps-4 d-none d-lg-block' src={process.env.PUBLIC_URL + '/images/logo (3).svg'}/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation
