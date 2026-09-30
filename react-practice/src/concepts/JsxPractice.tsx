export const JsxPractice =()=>{
    let sname:string='ravi';
    let age :number=90;
    let obj={
        name: 'sd',
        age: 90
    }

    let arr=["ram","shyam","ravi","golu"];

    return (
        <>
        <h2>My name is {sname}</h2>
        <h2>My age is {age}</h2>
        <h4>my brother name is  {obj.name}</h4>
        <h4>my brother name is  {obj.age}</h4>
            <ul>
                {arr.map((val,index) => {
                    return <li key={index}>{val}</li>
                })}
            </ul>
        </>
    )

}