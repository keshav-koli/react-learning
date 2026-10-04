import { useState } from "react"

const ColorChange = () => {
    const [color, setColor] = useState('white')
    return (
        <>
            <div className="w-full h-screen bg-black" style={{color:'red',backgroundColor:color}}>
                <div className="bg-amber-50 fixed bottom-12 flex w-full justify-evenly px-7">
                    <button onClick={() => setColor('red')} className="bg-red-600 text-white ">Red</button>
                    <button onClick={() => setColor('orage')} className="bg-orange-600 text-white">Orange</button>
                    <button onClick={() => setColor('yellow')} className="bg-yellow-600 text-white font-medium ">yellow</button>
                    <button onClick={() => setColor('blue')} className="bg-blue-600 text-white font-medium ">blue</button>
                    <button onClick={() => setColor('green')} className="bg-green-600 text-white font-medium ">green</button>
                    <button onClick={() => setColor('indigo')} className="bg-indigo-600 text-white font-medium ">indigo</button>
                    <button onClick={() => setColor('neon')} className="bg-purple-600 text-white font-medium ">purple</button>
                </div>
            </div>
        </>
    )
}

export default ColorChange