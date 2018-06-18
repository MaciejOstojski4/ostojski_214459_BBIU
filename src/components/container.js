import React from "react";
import UserList from "./user/userList";
import UserForm from "./user/userForm";
import Styled from "styled-components";

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: initialState.users
    };
  }

  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  };

  render() {
    return (
      <PageContainer>
        <UserList users={this.state.users}/>
        <UserForm onSubmit={this.addUser}/>
      </PageContainer>
    )
  }
}

const PageContainer = Styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
`;

const initialState = {
  users: [
    {
      id: 1,
      firstname: 'Maciej',
      lastname: 'Ostojski',
      company: 'Binar::Apps'
    },
    {
      id: 2,
      firstname: 'Zygmunt',
      lastname: 'Hajzer',
      company: 'TVN'
    },
    {
      id: 3,
      firstname: 'Jan',
      lastname: 'Kowalski',
      company: 'Ericsson'
    }
  ]
};

export default Container;
