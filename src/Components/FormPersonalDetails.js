import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, TextField, RaisedButton } from 'material-ui';

export class FormPersonalDetails extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter Occupation"
            floatingLabelText="Occupation"
            onChange={ handleChange('occupation') }
            defaultValue={ values.occupation } 
          />
          <br />
          <TextField
            hintText="Enter City"
            floatingLabelText="City"
            onChange={ handleChange('city') }
            defaultValue={ values.city } 
          />
          <br />
          <TextField
            hintText="Enter Bio"
            floatingLabelText="Bio"
            onChange={ handleChange('bio') }
            defaultValue={ values.bio } 
          />
          <br />
          <RaisedButton
            label="Back"
            primary={ false }
            style={ styles.button }
            onClick={ this.back }
          />
          <RaisedButton
            label="Continue"
            primary={ true }
            style={ styles.button }
            onClick={ this.continue }
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

export default FormPersonalDetails
