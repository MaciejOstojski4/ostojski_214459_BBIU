import React from "react";
import UserListElem from "./userListElem";
import Styled from "styled-components";


class UserList extends React.Component {

  renderUsers = () => {
    return (
      this.props.users.map(user => {
        return (
          <UserListElem key={`${user.id}${user.name}`} user={user} />
        )
      })
    )
  };

  render() {
    return (
      <UserListContainer>
        {this.renderUsers()}
      </UserListContainer>
    )
  }
}

const UserListContainer = Styled.div`
  flex: 2;
  color: #2196F3;
`;

export default UserList;
