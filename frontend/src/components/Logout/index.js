import { Component } from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/UserActions'
class Logout extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
  componentWillMount() {
    this.props.actions.logout();
    this.context.router.push('/');
  }
  render(){
      return null
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
export default connect(mapStateToProps, mapDispatchToProps)(Logout);