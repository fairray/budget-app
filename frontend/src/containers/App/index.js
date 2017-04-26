import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as UserActions from '../../actions/UserActions'

class App extends Component {
  render(){
    const {auth} = this.props;
    return (
      <div>
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
        <div className="container">
          {this.props.children}
        </div>
        <p>Footer</p>
      </div>
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