import vn from './myStyle.module.css'
const PropsDrilling=(props:any)=>{
    console.log(props);
    
    return (
        <>
        {/* Inline styling */}
         <h1 style={{color:'red',backgroundColor:'yellow'}}>{props.data.age}</h1>
         <h2 className={vn.container}>Hi my name is Kalam</h2>
         <h4 className='item'>yo yo</h4>
        </>
    )
}

export default PropsDrilling;