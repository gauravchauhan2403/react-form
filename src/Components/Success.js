import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';

export class FormUserDetails extends Component {
  
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thankyou For Your Submission</h1>
          <p> We will contact you soon on your email.
             Please check your inbox and the spam folder regularly.</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
