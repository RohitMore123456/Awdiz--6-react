import { useEffect, useState } from "react"

function EffectOne(){
    const [counter, setcounter] = useState(2)
    const [counter2, setcounter2] = useState(5)

    useEffect(() => {
        console.log("code Executed")
    })
    return(
        <div>
            <h1>Counter 1 : {counter}</h1>
            <button onClick={()=> setcounter(counter + 1)}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={()=> setcounter2(counter2 + 1)}>+</button>
        </div>
    )
}

export default EffectOne