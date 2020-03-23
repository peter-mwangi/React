import React from "react";

function Person({ person }) {
  return (
    <h2>
      I am {person.name} from {person.school} and my contact email is:{" "}
      {person.email}
    </h2>
  );
}
export default Person;
