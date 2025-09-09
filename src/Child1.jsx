import { useUser } from "./appContext";

function Child1({text}){
 const { user,setUser } = useUser();
    return(
        <>
        <h1>Child1</h1>
        <h2>{text}</h2>
        <button onClick={()=>setUser("new user")}>click me</button>
        <h1>{user}</h1>
        </>
    )
}

export default Child1;