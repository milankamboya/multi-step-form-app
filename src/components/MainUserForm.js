import React, { Component } from 'react';

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

  nestStep = () => {
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

  handleChange = input => {
    this.setState(prevState => {
      return {
        ...prevState,
        [input]: e.target.value
      }
    })
  };


  render() {
    let { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div>
            sdfsadfasd
          </div>
        );
      case 2:
        return (
          <div>test</div>
        );
      default: return;
    }
  }
}