import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/UserActions'

export class LoginPage extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.actions.login({name: e.target.elements[0].value, password: e.target.elements[1].value})
  }
  render() {
    return (
      <div>
          <form className='form-inline' onSubmit={this.handleSubmit}>
            <input type='text' placeholder='login'/>
            <input type="password" placeholder="password"/>
            <button type='submit'>Войти</button>
          </form>
          {this.props.user.isFetching && <span>spinner</span>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)