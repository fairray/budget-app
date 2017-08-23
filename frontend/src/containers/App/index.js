import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import RaisedButton from 'material-ui/RaisedButton';
import * as UserActions from '../../actions/UserActions'

class App extends Component {
  render(){
    const {auth} = this.props;
    return (
      <MuiThemeProvider>
      <div>
      { auth.isLoggedIn &&
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            {
              !auth.isLoggedIn && <li><Link to="/login">Login</Link></li>
            }
            { 
              auth.isLoggedIn && <li><Link to="/logout">logout</Link></li>
            }
          </ul>
        </nav>
      }
        <div className="container">
          {this.props.children}
        </div>
        <p>Footer</p>
      </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps (state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);