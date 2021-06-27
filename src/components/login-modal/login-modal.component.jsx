import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginModal = ({ show, onHide }) =>
  <Modal
    animation={false}
    show={show}
    onHide={() => onHide && onHide()}
  >
    <Modal.Header>Login Form</Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='secondary'>Close</Button>
      <Button variant='success' onClick={ () => onHide && onHide()}>Go!</Button>
    </Modal.Footer>
  </Modal>

export default LoginModal