import React, {Component} from 'react';

class Counter extends Component
{

    constructor(props)
    {
        super(props)

        this.state ={
            count: 0
        }
    }

    handleClick = () =>{

        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
    }

    render()
    {
        let{count} = this.state;
        return(
            <div>
                <h1>You clicked the button {count} times</h1>
                <button onClick={ (e) => this.handleClick()}>Click Me!</button>
            </div>
        );
    }
}
export default Counter;