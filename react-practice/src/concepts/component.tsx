// Two types of component 

import { JsxPractice } from "./JsxPractice"

export let Component=()=>{
    return(
        <h2>Component</h2>
    )
}

let Component2=()=>{
    return(
        <h3>Component2</h3>
    )
}

export {Component2}

function Component3(){
    return(
        <h3>hello world</h3>
    )
}

// export default Component3

// export default function(){
//     return(
//         <h5>dsaffdsa</h5>
//     )
// }

// export default ()=>{
//     return(
//         <h3>Anonymmnous arrow function</h3>
//     )
// }


let Compaonent4 = () => {
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

export default Compaonent4;
