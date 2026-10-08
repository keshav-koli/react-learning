// import React, { createContext, useState } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
// import { Component, Component2 } from "./concepts/component";
// import Compaonent4 from "./concepts/component";
// import A from "./concepts/component";

// import { JsxPractice } from "./concepts/JsxPractice";
// import { Properties } from "./concepts/properties";
// import { MeeshoProject } from "./meeshotTask/meeshoTask";
// Assets.js is a JavaScript module without TypeScript declarations.
// @ts-expect-error -- the asset data is provided by an untyped JavaScript module.
import assestsData from './assets/Assets.js';
import CurrenyExhanger from "./CurrenyExchanger/CurrenyExhanger.js";
import useCurrencyInfo from "./CurrenyExchanger/Currency.js";
// import StateHook from './concepts/UseStateHook.js'
// import ColorChange from "./ColorChangingTask/colorChange.js";
// import Card from "./themeChange/Card.js";
// import ContextApi from "./concepts/context.js";
// import Profile from "./concepts/Profile.js";
// import Login from "./concepts/Login.js";
// import { ThemeProvider } from "./themeChange/theme.js";
// import ThemeBtn from "./themeChange/ThemeBtn.js";
// import { TodoProvider } from './todoTask/todoContext.js';
// import type Todo from "./todoTask/todoContext.js";
// import TodoForm from "./todoTask/TodoForm.js";
// import TodoItem from "./todoTask/TodoItem.js";
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

// let App = () => {
//   return (
//     <>
//       <ColorChange></ColorChange>
//       <label htmlFor="sd"></label>
//       <input id=""></input>
//     </>
//   )
// }

// export default App;

// ? Context Api 
// export let myContext = createContext({});

// let App = () => {
//   let data = { sd: 'dsaf' }

//   return (
//     <>
//       <myContext.Provider value={data }>
//         <ContextApi></ContextApi>
//       </myContext.Provider>
//     </>
//   )
// }

// export default App;

// ? Login task by useContext
// export let userContext = createContext({});

// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <userContext.Provider value={{ user, setUser }}>
//       <Login />
//       <Profile />
//     </userContext.Provider>
//   )
// }

// export default App


// ? theme change using context APi 

// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const lightMode = () => {
//     setTheme('light')
//   }
//   const darkMode = () => {
//     setTheme('dark')
//   }
//   useEffect(() => {
//     let themebody = document.querySelector('html');
//     themebody?.classList.remove("light", "dark")
//     themebody?.classList.add(theme);
//   }, [theme])


//   return (
//     <ThemeProvider value={{ theme, lightMode, darkMode }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>


//   )
// }

// export default App


// Todo Task
// const App = () => {
//   const [todo, setTodo] = useState<Todo[]>([]);

//   const updateTodo = (Id: number, todo: Todo) => {
//     setTodo((prev) => prev.map(item => item.id == Id ? { ...item, ...todo } : item))
//   }

//   const deleteTodo = (Id: number) => {
//     setTodo((prev) => prev.filter(item => item.id !== Id))
//   }

//   const addTodo = (todo: Todo) => {
//     setTodo((prev) => [todo, ...prev]);
//   }

//   const toggleComplete = (Id: number) => {
//     setTodo((prev) => prev.map(item => item.id === Id ? { ...item, isCompleted: !item.isCompleted } : item))
//   }


//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todo))
//   }, [todo])

//   useEffect(() => {
//     const todo_item: Todo[] = JSON.parse(localStorage.getItem("todos") ?? "[]");
//     if (todo_item && todo_item.length > 0) {
//       setTodo(todo_item)
//     }
//   }, [])

//   return (
//     <TodoProvider value={{ todo, updateTodo, deleteTodo, addTodo, toggleComplete }}>
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//           <div className="mb-4">
//             {/* Todo form goes here */}
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {/*Loop and Add TodoItem here */}
//             {todo.map((item) => (
//               <div key={item.id} className="w-full">
//                 <TodoItem todo={item} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   )
// }
// export default App;


// ? Password generter
// const App = () => {
//   const [length, setLength] = useState(8);
//   const [password, setPassword] = useState("");
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charaterAllowed, setCharaterAllowed] = useState(false);


//   const generatePassword = useCallback(() => {
//     let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     if (numberAllowed) str += '0123456789';
//     if (charaterAllowed) str += '!@#$%^&*-_+=[]{}~`'
//     for (let index = 1; index <= length; index++) {
//       let char: number = Math.floor(Math.random() * str.length + 1);
//       console.log(Math.random());
//       console.log(Math.random()*str.length);
//       console.log(Math.random()*str.length +1);

//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [numberAllowed, charaterAllowed, length])

//   useEffect(() => {
//     generatePassword();
//   }, [length, numberAllowed, charaterAllowed])

//   const passwordRef = useRef<HTMLInputElement>(null);

//   const CopyText = () => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 30);
//     window.navigator.clipboard.writeText(password)
//   }
//   return (
//     <>
//       <div className="bg-gray-700 w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 text-orange-500">
//         <span className="text-white">Password</span>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-white" ref={passwordRef} />
//           <button className="bg-blue-800 w-15 text-white" onClick={CopyText}>Copy</button>
//         </div>
//         <div className="flex gap-2 items-center">
//           <div className="flex items-center gap-x-1">
//             <input type="range" value={length} min={8} max={30} onChange={(e) => setLength(Number(e.target.value))} />
//             <span>Length({length})</span>
//           </div>
//           <div className="flex gap-2 items-center">
//             <input type="checkbox" onChange={() => setNumberAllowed(prev => !prev)} /><span>Number </span>
//           </div>
//           <div className="flex gap-2 items-center">
//             <input type="checkbox" onChange={() => setCharaterAllowed(prev => !prev)} /><span>Charater </span>
//           </div>

//         </div>
//       </div>
//     </>

//   )
// }

// export default App


// ? Curreny Exchanger
const App = () => {
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [from,setFrom]=useState('usd')
  const [to,setTo]=useState('inr')

  const currencyInfo=useCurrencyInfo(from);
  const options = Object.keys(currencyInfo ?? [])

  const convert=()=>{
    setConvertedAmount(amount * (currencyInfo?.[to] ?? 0))
  }

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/38722/pexels-photo-38722.jpeg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <CurrenyExhanger
                label="From"
                amount={amount}
                currencyOptions={options}
                selectedCurrency={from}
                onCurrenyChange={(curr)=> setFrom(curr)}
                onAmountChange={currency=>setAmount(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <CurrenyExhanger
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                selectedCurrency={to}
                amountDisabled={true}
                onCurrenyChange={(curr)=> setTo(curr)}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App