import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui';

export default class ConfirmForm extends Component {
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
    const { values: { firstName, lastName, email, profession, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Profession" secondaryText={profession} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <RaisedButton
            label="Confirm & Continue"
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