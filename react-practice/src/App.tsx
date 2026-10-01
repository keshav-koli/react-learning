import React from "react";
import { Component, Component2 } from "./concepts/component";
import Compaonent4 from "./concepts/component";
import A from "./concepts/component";

import { JsxPractice } from "./concepts/JsxPractice";
import { Properties } from "./concepts/properties";
// ? Function based component
// ^ 1
// function App() {

//   return (
//     <>
//       <h1>
//         hello world
//       </h1>
//     </>
//   )
// }

// export default App


// let App=()=>{
//   return (

//     <h1>dsa</h1>
//   )
// }

// export default App


// export default function(){
//   return (
//     <React.Fragment>
//     <h2>daf</h2>
//     <h3>Anonynmous function</h3>
//     <Component></Component>
//     <Component2/>
//     <A></A>
//     <Compaonent4/>
//     </React.Fragment>
//   )
// }
// const App = () => {
//   return (
//     <>
//       <Properties name='keshav' age={78} address='moti nagar'>
//         <h1>Hello</h1>
//         <h1>Hello!!!</h1>
//       </Properties>
//       <Properties name='Ram' age={45} address='moti nagar'><></></Properties>
//     </>
//   )
// }

// export default App;


const App = () => {
  let sname = "ram";
  let age = 44;
  let skills = {
    frontend: ["html", "css", "js", "Reactjs"],
    database: ["sql", "plsql", "mongodb"],
    backend: ["pythoooonnn", "jooovaaa", "jovaScript", "Djangoooooo"],
  };
  let hobbies = {
    dayTimeHobbies: {
      publicHobies: "Reading",
      privateHobies: "Snatching",
    },
    nightTimeHobbies: {
      parentKnows: "Marvals",
      parentDontKnows: "betting",
    },
  };
  return(
    <>
    
    <Properties sname={sname} age={age} skills={skills} hobbies={hobbies}></Properties>
    <Properties sname={sname} age={age} skills={skills} hobbies={hobbies} address='moti nagar'></Properties>
    </>
  )
}

export default App;