import React, {Component} from 'react';

// function Greet()
// {
//     return<h1>Hello Peter Mwangi</h1>
// }

const Greet = (props) =>{
    return(
        <div>
            <h1>Hello {props.name} alias {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet;