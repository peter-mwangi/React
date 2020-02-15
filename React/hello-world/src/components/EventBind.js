import React, {Component} from 'react';


class EventBind extends Component
{

    constructor(props)
    {
        super()
        
        this.state = {

            message: "Click to View My Name"
        }
    }

    handleClickEvent = () =>{

        this.setState({message: "Peter Mwangi"})
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>

                <span>
                    <button onClick = {this.handleClickEvent}>Click Me</button>
                    
                </span>
            </div>
        )
    }

}
export default EventBind;