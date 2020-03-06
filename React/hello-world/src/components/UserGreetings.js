import React, {Component} from 'react';

class UserGreetings extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {

            isLoginedIn: false
        }
    }
    render()
    {
        let message
        // if(this.state.isLoginedIn)
        // {
        //     return(
        //         <div>
        //             Welcome Peter Mwangi.
        //         </div>

        //     );
        // }
        // else
        // {
        //     return(
        //         <div>
        //             Welcome Guest.
        //         </div>
        //     );
        // }

    //     if(this.state.isLoginedIn)
    //     {
    //         message =<div>Welcome Sir. Peter Mwangi</div>
    //     }
    //     else
    //     {
    //         message =<div>Welcome Guest</div>

    //     }
    // return<div>{message}</div>

    // return (
    //     this.state.isLoginedIn ?
    //      (<div>Welcome Peter</div>)
    //      :
    //     (<div>Welcome Guest</div>)
    // );

    return this.state.isLoginedIn && <div>Welcome Peter Mwangi</div>
    }
}
export default UserGreetings;