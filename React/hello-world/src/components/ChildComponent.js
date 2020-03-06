import React from 'react';

function ChildComponent(props)
{
    return(
        <button onClick = {() => props.greetHandler('child')}>Click Me</button>
    )
}
export default ChildComponent; 