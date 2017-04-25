import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>App</h1>
        <ul>
          <li><Link to='/login'>Login</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
