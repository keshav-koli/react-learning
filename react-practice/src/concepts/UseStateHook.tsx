import { useState } from "react";

const StateHook=()=>{
    const [counter,setCounter]=useState('sd');
    function increase(){
        setCounter(counter+1)
    }
    function decrease(){
        setCounter(counter-1)
    }
    return (
        <>
        
        <h1>{counter}</h1>
        {/* <button onClick={increase}>Increase</button> */}
        {/* <button onClick={decrease}>Increase</button> */}
        <button onClick={()=>setCounter(counter+1)}>Increase</button>
        <button onClick={()=>setCounter(counter-1)}>Increase</button>
        </>
    )
}

export default StateHook;