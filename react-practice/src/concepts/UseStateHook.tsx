import { useState } from "react";


// & For Number
// const StateHook=()=>{
//     const [counter,setCounter]=useState(0);
//     return (
//         <>
//             <h3>Counter {counter}</h3>
//             <button onClick={()=>setCounter(counter+1)}>increase</button>
//             <button onClick={()=>setCounter(counter-1)}>decrease</button>
//         </>
//     )
// }

// export default StateHook;


// & For Number (Interview Question)
const StateHook = () => {
    const [counter, setCounter] = useState(0);
    function IncreaseCounter() {
        setCounter(counter + 1);
        setCounter(pre => pre + 1); // adding counter directly does not give you desire output , fiber concept , to patches update  
        setCounter(pre => pre + 1);
    }
    function decreaseCounter() {
        setCounter(counter - 1);
        setCounter(pre => pre - 1);
        setCounter(pre => pre - 1);
    }
    return (
        <>
            <h3>Counter {counter}</h3>
            <button onClick={IncreaseCounter}>increase</button>
            <button onClick={decreaseCounter}>decrease</button>
        </>
    )
}

export default StateHook;

// & For Boolean
// const StateHook=()=>{
//     const [gender,setGender]=useState(true);
//     return (
//         <>
//             <h3>Gender {gender?'Male':'Female'}</h3>
//             <button onClick={()=>setGender(true)}>male</button>
//             <button onClick={()=>setGender(false)}>Female</button>
//         </>
//     )
// }

// export default StateHook;


// & For String
// const StateHook = () => {
//     const [counter, setCounter] = useState('sd');
//     return (
//         <>
//             <h1>{counter}</h1>
//             <button onClick={() => {
//                 setCounter(counter + 1)
//                 console.log(typeof counter);
//             }}>Increase</button>
//             <button onClick={() => {
//                 setCounter(String(+Number(counter)))
//                 console.log(typeof counter);
//             }}>decrease</button>
//         </>
//     )
// }

// export default StateHook;


// & For Array


// const StateHook = () => {

//     let python = ["python", "MongoDB", "Django"];
//     let java = ["Java", "Hibernate", "Spring"];
//     let mern = ["React Js", "Node js", "Next js"];
//     let defaultSkills = ["html", "css", "javascript"];
//     const [course, setCourse] = useState(defaultSkills);


//     return (
//         <>
//             <ul>Your Course Is {course.map((val, idx) => {
//                 return <li key={idx}>{val}</li>
//             })}</ul>
//             <button onClick={() => { setCourse(mern) }}>Mern</button>
//             <button onClick={() => { setCourse(java) }}>Java</button>
//             <button onClick={() => { setCourse(python) }}>Python</button>

//             <h3>Skills: {course.map((val, index) => {
//                 return <li key={index}>{val}</li>
//             })
//             }
//             </h3>
//         </>
//     )
// }

// export default StateHook;