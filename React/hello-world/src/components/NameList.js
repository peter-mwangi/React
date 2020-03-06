import React from 'react';
import Hello from './Hello';

function NameList() {

    const persons =
     [
        {
            id: 1,
            userId:2,
            title: "Hello",
            body: "Hey I'm reacting"
        },
        {
            id: 2,
            userId: 2,
            title: "Welcome",
            body: "congratulations "

        },
        {
            id: 3,
            userId: 2,
            title: "Are you ok",
            body: "Yeah, This is a total new experience" 
        },
        {
            id: 4,
            userId: 2,
            title: "This is my county",
            body: "Nyeri, where not looting is an offence"
        },
        {
            id: 5,
            userId: 2,
            title: "Work Smart peter",
            body: "Repeat till you get it."

        },
        {
            id: 6,
            userId: 2,
            title: "Final Post",
            body: "It was amazing seeing you here"
        }
    ];

const personsList = persons.map(person =>)
return<div>{personsList}</div>
}
export default NameList;