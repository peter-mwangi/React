import React from 'react';

function FunctionClick(){

    function handleClick()
    {
        console.log('Clicked')
    }
    return(
        <div>
            <h1>Handling Events</h1>
            <span>
                <button onClick={handleClick}>Click</button>
            </span>
        </div>
    )

}

export default FunctionClick;