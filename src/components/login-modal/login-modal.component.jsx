import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginModal = ({ show, onHide }) =>
  <Modal show={show} onHide={onHide} animation={false}>
    <Modal.Header>
      Login Modal
    </Modal.Header>

    <Modal.Body>
      Please provide user credentials to login
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' />
      </Form.Group>
    </Modal.Body>

    <Modal.Footer>
      <Button
        type='button'
        variant='secondary'
        onClick={() => onHide()}
      >
        Close
      </Button>
      <Button
        type='button'
        variant='success'
        onClick={() => onHide()}
      >
        Aceptar
      </Button>
    </Modal.Footer>
  </Modal>

export default LoginModal