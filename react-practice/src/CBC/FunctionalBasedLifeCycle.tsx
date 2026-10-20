import { useEffect, useState } from 'react'

const FunctionalBasedLifeCycle = () => {
    const [counter,setCounter]=useState(0);

    useEffect(() => {
      console.log("component mounted successfully" + counter) ;
      return()=>{
        console.log("removed from UI ");
      }
    }, []);

    useEffect(() => {
      console.log("Updating successfully" + counter) ;

    }, [counter]);
    
    const increseCounter=()=>{
        setCounter(counter+1)
    }
    return (
    <div>FunctionalBasedLifeCycle

        counter {counter}
        <button onClick={increseCounter}>Incresee</button>
    </div>
  )
}

export default FunctionalBasedLifeCycle