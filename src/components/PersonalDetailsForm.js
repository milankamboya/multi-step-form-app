import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class PersonalDetailsForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your profession"
            floatingLabelText="Profession"
            onChange={handleChange('profession')}
            defaultValue={values.profession}
          />
          <br />
          <TextField
            hintText="Enter your city"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            hintText="Enter your bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton
            label="continue"
            primary={true}
            style={this.styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="back"
            primary={false}
            style={this.styles.button}
            onClick={this.back}
          />
        </>
      </MuiThemeProvider>
    )
  }
}