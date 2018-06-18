import React from "react";

class UserListElem extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
        <p>{this.props.user.company}</p>
      </div>
    )
  }
}

export default UserListElem;
