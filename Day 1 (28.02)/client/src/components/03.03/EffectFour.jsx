import { useEffect, useState } from "react"

function EffectFour (){
    const [counter1, setcounter1] = useState(5)
    const [counter2, setcounter2] = useState(25)
    useEffect(()=>{console.log("Code Executed")}, [counter1,counter2])
    return(
        <div>
            <h1>Counter 1 : {counter1}</h1>
            <button onClick={()=> setcounter1(counter1 + 1)}>+</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={()=> setcounter2(counter2 + 1)}>+</button>
        </div>
        

    )
}

export default EffectFour