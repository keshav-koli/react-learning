// export const Properties=(props:any)=>{
//     console.log(props);
    
//     return (
//         <>
//         <h2>{props.name}</h2>
//         <h2>{props.age}</h2>
//         {props.children}
//         </>
//     )
// }

// ? Destruturing

// export const Properties=({name,age,address,children})=>{
//     console.log(name,age,address,children);
    
//     return (
//         <>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h4>{address}</h4>
//         {children}
//         </>
//     )
// }


// ? Destructuring advance 

export const Properties=(props)=>{
    console.log(props);
    
    let {
        sname,
        address='no available',
        age,
        skills:{frontend,backend,database},
        hobbies:{dayTimeHobbies:{publicHobies,privateHobies},nightTimeHobbies:{parentKnows,parentDontKnows}}
    }=props
    return (
        <>
            <h1>{sname}</h1>
            <h1>{age}</h1>
            <div>{frontend.map((val)=>{
                return <ul><li>{val}</li></ul>
            })}</div>
            <div>
                {privateHobies}
            </div>
            <h4>{address}</h4>
        </>
    )
}

// ? 