import React from "react";
import Styled from "styled-components";


class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        company: ""
      }
    }
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.user);
  };

  onChange = (event) => {
    event.preventDefault();
    switch(event.target.id) {
      case "firstname":
        this.setState({
          user: {...this.state.user, firstname: event.target.value}
        });
        break;
      case "lastname":
        this.setState({
          user: {...this.state.user, lastname: event.target.value}
        });
        break;
      case "company":
        this.setState({
          user: {...this.state.user, company: event.target.value}
        });
        break;
    }
  };

  render() {
    return (
      <UserFormContainer>
        <form>
          <FormGroup>
            <FormLabel>Imię</FormLabel>
            <FormInput id="firstname" type="text" name="firstname" onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Nazwisko</FormLabel>
            <FormInput id="lastname" type="text" name="lastname" onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Firma</FormLabel>
            <FormInput id="company" type="text" name="company" onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <FormSubmit type="submit" onClick={this.submitForm}>Dodaj</FormSubmit>
          </FormGroup>
        </form>
      </UserFormContainer>
    )
  }
}

const UserFormContainer = Styled.div`
  flex: 1;
`;

const FormGroup = Styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  color: #2196F3;
`;

const FormLabel = Styled.label`
  flex: 1;
`;

const FormInput = Styled.input`
  flex: 3;
  border: 1px solid #2196F3;
  padding: 3px;
`;

const FormSubmit = Styled.button`
  border: 1px solid #2196F3;
  background-color: transparent;
  transition: 0.5s ease;
  color: #2196F3;
  padding: 10px 25px;
  flex: 1;
  
  &:hover {
    background-color: #2196F3;
    color: #ffffff
  }
`

export default UserForm;
