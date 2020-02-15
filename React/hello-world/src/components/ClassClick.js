import React, {Component} from 'react';

class ClassClick extends Component
{

    handleButtonClick = () =>{

        console.log("Clicked")
    }

    render()
    {
        return(
            <div>
                <h1>Handling Events in a class component</h1>
                <span>
                    <button onClick = {() => this.handleButtonClick()}>Click Me</button>
                </span>
            </div>
        )
    }

}
export default ClassClick;