import React from "react";
import { Component, Component2 ,Sdsa }  from "./concepts/component";
// import Compaonent3 from "./concepts/component";
import A from "./concepts/component";

import { JsxPractice } from "./concepts/JsxPractice";
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
//     <Sdsa/>
//     </React.Fragment>
//   )
// }

let App = () => {
  let sname = "ram";
  let age = 25;
  let course = "Java Full stack";
  let skills = ["html", "css", "js", "react", "tailwind CSS"];

  return (
    <>
      <h1>My self {sname}</h1>
      <h2>My age is {age}</h2>
      <h2>I opted for {course}</h2>

      <h2>My skills are:</h2>
      <ul >
        {skills.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>

      <JsxPractice />
    </>
  );
};

export default App;
