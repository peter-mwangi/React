import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggined: true
    };
  }

  render() {

    return this.state.isLoggined && <div>Welcome Peter Mwangi</div>

    // return this.state.isLoggined ? (
    //   <div>Welcome Peter Mwangi</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //     let message;
    //     if (this.state.isLoggined)
    //     {
    //         message = <div>Welcome Peter Mwangi</div>

    //     }
    //     else
    //     {
    //         message = <div>Welcome Guest</div>
    //     }

    // return<div>{message}</div>
  }
}
export default UserGreetings;
