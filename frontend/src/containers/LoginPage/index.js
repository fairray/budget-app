import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import * as UserActions from '../../actions/UserActions'
import './style.css';

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
      <div className="login-form-container">
        <Card>
            <form className='login-form' onSubmit={this.handleSubmit}>
              <div className="fields-group">
                <TextField name="login" type='text' placeholder='login'/>
                <TextField name="password" type="password" placeholder="password"/>
              </div>
              <div className="form-actions">
                <RaisedButton 
                  type='submit'
                  disabled={this.props.auth.isFetching}
                  primary
                  icon={this.props.auth.isFetching && <CircularProgress size={25} thickness={2} />}
                  >Войти</RaisedButton>
              </div>
            </form>
        </Card>
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