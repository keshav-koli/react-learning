import React from "react";
import { Component, Component2 } from "./concepts/component";
import Compaonent4 from "./concepts/component";
import A from "./concepts/component";

import { JsxPractice } from "./concepts/JsxPractice";
import { Properties } from "./concepts/properties";
import { MeeshoProject } from "./meeshotTask/meeshoTask";
// Assets.js is a JavaScript module without TypeScript declarations.
// @ts-expect-error -- the asset data is provided by an untyped JavaScript module.
import assestsData from './assets/Assets.js';
import StateHook from './concepts/UseStateHook.js'
import ColorChange from "./ColorChangingTask/colorChange.js";
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

// ^ Default props and destructuring 
// const App = () => {
//   let sname = "ram";
//   let age = 44;
//   let skills = {
//     frontend: ["html", "css", "js", "Reactjs"],
//     database: ["sql", "plsql", "mongodb"],
//     backend: ["pythoooonnn", "jooovaaa", "jovaScript", "Djangoooooo"],
//   };
//   let hobbies = {
//     dayTimeHobbies: {
//       publicHobies: "Reading",
//       privateHobies: "Snatching",
//     },
//     nightTimeHobbies: {
//       parentKnows: "Marvals",
//       parentDontKnows: "betting",
//     },
//   };
//   return(
//     <>

//     <Properties sname={sname} age={age} skills={skills} hobbies={hobbies} isplaced={true}></Properties>
//     <Properties sname={sname} age={age} skills={skills} hobbies={hobbies} address='moti nagar'></Properties>
//     </>
//   )
// }

// export default App;


// let App=()=>{
//   let data ={
//     das:'asd',
//     dsadsa:74
//   }

//   return (
//     <>
//       <Properties sname='sdsda' age={74} data={data}></Properties>
//     </>
//   )
// }

// export default App;

// ? meesho project


// let App = () => {
//   return (
//     <>
//     <MeeshoProject heading="Men's Category" data={assestsData.meeshoTask.menData}></MeeshoProject>
//     <MeeshoProject heading="WoMen's Category" data={assestsData.meeshoTask.womenData}></MeeshoProject>
//     <MeeshoProject heading="Kids's Category" data={assestsData.meeshoTask.kidData}></MeeshoProject>
//     <MeeshoProject heading="Footwear Category" data={assestsData.meeshoTask.footwearData}></MeeshoProject>
//     <MeeshoProject heading="Watch Category" data={assestsData.meeshoTask.watchData}></MeeshoProject>
//     </>
//   )
// }

// export default App;


// ? UseState
// let App = () => {
//   return (
//     <>
//     <StateHook></StateHook>
//     </>
//   )
// }

// export default App;

// ? Color Changing task

let App = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="rounded-xl bg-white p-8 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">
          Tailwind CSS v4 + React works!
        </h1>
        <p className="mt-2 text-gray-600">
          Start editing to build your application.
        </p>
      </div>
    </div>
    </>
  )
}

export default App;
