import { useState } from "react";
import Buttons from "./Buttons";


function Output(){
    const[couter,setCouter]=useState(0)

    function increment(){
        setCouter(couter+1)
    }

    function decrement(){
        setCouter(couter-1)
    }
    return(
        <>
        <h1>{couter}</h1>
        <Buttons increment={increment} decrement={decrement} coutereeeee={couter}/>
        </>
    )
}
export default Output;