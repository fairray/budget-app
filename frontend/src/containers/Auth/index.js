import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';

export default function(ComposedComponent) {  
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if(!this.props.isLoggedIn) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isLoggedIn) {
        this.context.router.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { isLoggedIn: state.auth.isLoggedIn };
  }

  return connect(mapStateToProps)(Authentication);
}