import React from 'react'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/Button'

import LoginModal from '../../components/login-modal/login-modal.component'

import {
  userLogin
} from '../../redux/user/user.actions'
class HomeContainer extends React.Component {

  state = {
    show: false
  }

  toggleLoginModal = ()=> {
    this.setState(prevState => ({
      ...prevState,
      show: !prevState.show
    }))
  }

  componentDidMount(){
    this.props.userLogin('richard', 'medina')
  }

  render(){
    console.log('HomeContainer props: ', this.props)

    const { show } = this.state

    return (
      <div>
        Home Container! <Button variant='link' onClick={() => this.toggleLoginModal()}>Open Modal</Button>
        <hr />
          <LoginModal
            show={show}
            onHide={this.toggleLoginModal}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  ...state
})

const mapDispatchToProps = dispatch => ({
  userLogin: (userName, password) => dispatch(userLogin(userName, password))
})

export default
  connect(mapStateToProps, mapDispatchToProps)
  (HomeContainer)
