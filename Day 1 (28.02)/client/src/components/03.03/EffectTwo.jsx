import { useEffect, useState } from "react"

function EffectTwo(){
    const [counter, setcounter] = useState(1)

    useEffect(() => {
        console.log("Code Executed.")
    },[])
     return(
        <div>
            <h1>Counter {counter}</h1>
            <button onClick={()=> setcounter(counter + 1)}>+</button>
        </div>
     )
}
export default EffectTwo