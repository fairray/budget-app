import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/UserActions'

export class LoginPage extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static contextTypes = {
      router: PropTypes.object
  }
  handleSubmit(e) {
    e.preventDefault();
    let login = e.target.elements[0].value;
    let pass = e.target.elements[1].value;
    this.props.actions.login({name: login, password: pass});
  }
  checkLoggedIn(props){
    if (props.isLoggedIn){
      this.context.router.push({
        pathname: '/'
      });
    }
  }
  componentWillMount(){
    const { auth } = this.props;
    this.checkLoggedIn(auth);
  }
  componentWillReceiveProps(newProps){
    const { auth } = newProps;
    this.checkLoggedIn(auth);
  }
  render() {
    return (
      <div>
          <form className='form-inline' onSubmit={this.handleSubmit}>
            <input type='text' placeholder='login'/>
            <input type="password" placeholder="password"/>
            <button type='submit'>Войти</button>
          </form>
          {this.props.auth.isFetching && <span>spinner</span>}
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