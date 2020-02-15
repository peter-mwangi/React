import React, {Component} from 'react';

class Message extends Component
{
    constructor()
    {
        super()

        this.state = {

            message: "Welcome visitor"
        }
    }

    handleClick =() =>{

        this.setState({
            message: "Thank you for subsribing"
        })
    }
    render()
    {
        return(
            <div className="App">
                <h1>{this.state.message}</h1>
                <button onClick={(e)=>this.handleClick()}>Subscribe</button>
            </div>
        );

    }
}
export default Message;