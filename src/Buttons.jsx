
function Buttons({increment,decrement,coutereeeee}){
    return(
        <>
       <h1>{coutereeeee}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
         <button>reset</button>
        </>
    )
}
export default Buttons;