import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './main/main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Notify from './components/shared-components/notify/notify';

const theme = createMuiTheme();
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <MuiThemeProvider theme={theme}>
        <Main />
        {
          this.props.isError ? <Notify /> : null
        }
      </MuiThemeProvider>

    ]);
  }
}

const mapStateToProps = state => ({
  message: state.common.message,
  isError: state.common.isError
});

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
