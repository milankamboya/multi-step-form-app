import React, { Component } from 'react';
// import Dialog from 'material-ui/core/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserDetailsForm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  styles = {
    button: {
      margin: 15
    }
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter your first name"
            floatingLabelText="FirstName"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="LastName"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={this.styles.button}
            onClick={this.continue}
          />
        </>
      </MuiThemeProvider>
    );
  }
}