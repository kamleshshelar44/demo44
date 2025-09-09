import { useState } from "react";
import { useUser } from "./appContext";
import Child1 from "./Child1";

function Child({text}){
 const { user } = useUser();
  const[data,setData]=useState(0)
    return(
        <>
        <h1 onClick={()=>setData('welcome')}>Child</h1>
        <h2 onClick={()=>setData('hello from child')}>{text}</h2>
        {/* // <h1>{user}</h1> */}
        <h4>{data}</h4>

        {/* <Child1 text={text} data={data} /> */}
        </>
    )
}

export default Child;