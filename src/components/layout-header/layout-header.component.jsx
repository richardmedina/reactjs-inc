import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'


const LayoutHeader = () =>
  <Navbar>
    <Navbar.Brand href='#'>HelloWorld!</Navbar.Brand>

    <Nav>
      <Nav.Link as={Link} to='/home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
    </Nav>

    <Form inline>
      <Form.Group>
        <Form.Control type='text' placeholder='Search...'></Form.Control>
        <Button variant='success' type='button'>Go</Button>
      </Form.Group>
    </Form>

    <Nav>
      <Nav.Link as={Link} to='/login'>Login</Nav.Link>
    </Nav>

  </Navbar>
  
export default LayoutHeader
