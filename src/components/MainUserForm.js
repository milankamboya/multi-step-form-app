import React, { Component } from 'react';
import UserDetailsForm from './UserDetailsForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import ConfirmForm from './ConfirmForm';
import SuccessForm from './SuccessForm';

export default class MainUserForm extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    city: '',
    bio: ''
  }

  nextStep = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step + 1
      }
    })
  };

  prevStep = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        step: prevState.step - 1
      }
    })
  };

  handleChange = input => e => {
    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     [input]: e.target.value
    //   }
    // })
    this.setState({ [input]: e.target.value });
  };


  render() {
    let { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return <UserDetailsForm
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />;
      case 2:
        return <PersonalDetailsForm />;
      case 3:
        return <ConfirmForm />;
      case 4:
        return <SuccessForm />;

      default: return;
    }
  }
}