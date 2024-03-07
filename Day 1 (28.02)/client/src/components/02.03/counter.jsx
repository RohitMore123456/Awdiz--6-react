import { useState } from "react";

function Counter (){
    const initialprice = 1000
    const [counter, setcounter] = useState(1)
    const [price, setprice] = useState(initialprice)
    function Increment (){
        if(counter<10){
            setcounter(prevvalue => prevvalue + 1);
            setprice(initialprice*(counter + 1))
        }
         
    }
    function Decrement(){
        if(counter > 1){
            setcounter(prevvalue => prevvalue -1);
            setprice(initialprice*(counter-1))
        }
         
    }
    function Reset(){
        setcounter(1);
        setprice(initialprice)
    }
    return(
        <div>
            <h1>Counter - {counter} and price {price}</h1>
            <button onClick={Increment} >+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;