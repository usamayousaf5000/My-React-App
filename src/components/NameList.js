import React from "react";
import People from "./Person";
 const NameList = () => {
  const persons = [{
    name:"Usama",
    age: 28,
  }, 
  {name:"Ahsan",
    age:26
  }, 
  {name:"Ahmed",
    age: 27
  }, 
  {name:"Misal",
    age: 24
  }
]
const PersonList = persons.map(person => <People person={person}/>);
return (
    <>
    {PersonList}
    {/* {persons.map((person, index) => <h2 key={index}>{person.name}</h2>)} */}
    </>
  )
};

export default NameList;
