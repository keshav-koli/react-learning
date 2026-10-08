import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const [data, setData] = useState('')
    // let data=useLoaderData();
    useEffect(()=>{
        fetch('https://api.github.com/users/keshav-koli')
        .then(res=>res.json())
        .then(data=>setData(data));
        console.log(data);
    },[])

  return (
    <div>
        <p>Github : {data.name}</p>
        <img src={data.avatar_url} alt="github image"/>
    </div>
  )
}

export default Github;

export let githubData=async()=>{
    let data=await fetch('https://api.github.com/users/keshav-koli');
    return data.json();
}