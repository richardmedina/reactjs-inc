import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const LayoutHeader = () =>
  <Navbar>
    <Navbar.Brand href='#'>HelloWorld!</Navbar.Brand>

    <Nav className='mr-auto'>
      <Nav.Link href='#'>Home</Nav.Link>
      <Nav.Link href='#'>About</Nav.Link>
    </Nav>

    <Form inline>
      <Form.Group>
        <Form.Control type='text' placeholder='Search...'></Form.Control>
        <Button variant='success' type='button'>Go</Button>
      </Form.Group>
    </Form>

  </Navbar>
  
export default LayoutHeader
