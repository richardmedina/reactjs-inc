import React, { useState } from 'react'

import  { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LoginModal from '../login-modal/login-modal.component'



const LayoutHeader = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)

  console.log('showLoginModal: ', showLoginModal)
  console.log('setShowLoginModal: ', setShowLoginModal)
  return (
    <Navbar>
      <LoginModal
        show={showLoginModal}
        onHide={() => { setShowLoginModal(false) }}
      />
      <Navbar.Brand href='#'>SomeUI</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
        <Nav.Link as={Link} to='/about' >About</Nav.Link>
      </Nav>
      <Form inline>
        <Form.Group>
          <Button
            variant='success'
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </Button>
        </Form.Group>
      </Form>
    </Navbar>
  )
}

export default LayoutHeader
