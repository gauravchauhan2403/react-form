import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, TextField, RaisedButton} from 'material-ui';

export class FormUserDetails extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName} 
          />
          <br />
          <TextField
            hintText="Enter Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName} 
          />
          <br />
          <TextField
            hintText="Enter Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email} 
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button :{
    margin: 15
  }
}

export default FormUserDetails
