import React from "react";
import Person from './Person';

function NameList() {

  const names =['Peter','Ivy','Sharon','Violet','Ivy'];
const namesList=names.map((name, index)=><h2 key={index}>{index} {name}</h2>)
  const persons = [
    {
      id: 1,
      name: "Peter",
      school: "Taita Taveta Uni",
      email: "test@test.com"
    },
    {
      id: 2,
      name: "Anthony",
      school: "Kenyatta Uni",
      email: "hello@test.com"
    },
    {
      id: 3,
      name: "Daniel",
      school: "Kisii Uni",
      email: "test@kisii.com"
    },
    {
      id: 4,
      name: "Eugene",
      school: "Daystar",
      email: "info@test.com"
    },
    {
      id: 5,
      name: "Ann",
      school: "JKUAT",
      email: "jkuat@jkuat.com"
    },
    {
      id: 6,
      name: "Ivy",
      school: "USIU",
      email: "aguthi@kenya.com"
    },
    {
      id: 7,
      name: "Leah",
      school: "KIST",
      email: "test@t10.com"
    }
  ]
  // const nameList = persons.map(person => <Person key= {person.id} person = {person}/>
    // )
  return <div>{namesList}</div>;
}
export default NameList;
