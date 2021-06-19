import React from 'react'
import { connect } from 'react-redux'

import {
  userLogin
} from '../../redux/user/user.actions'
class HomeContainer extends React.Component {

  componentDidMount(){
    this.props.userLogin('richard', 'medina')
  }

  render(){
    console.log('HomeContainer props: ', this.props)

    return (
      <div>
        Home Container!
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
