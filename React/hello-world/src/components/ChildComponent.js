import React from 'react';

function ChildComponent(props)
{
    return(
        <div className ="App">
            <button onClick = {props.greetHandler}>Greet Parent</button>
        </div>
    )
}
export default ChildComponent;