import React, {Component} from 'react';

class Welcome extends Component
{
    render()
    {
        return(
            <div className ="App">
                <h1>Did you Know {this.props.name} is a {this.props.workOccupation} </h1>
            </div>
        );
    }
}
export default Welcome;