import { useContext } from "react"
import { UseCounter } from "../../App"



const GlobuleCounter=()=>{
    const {counterHandler,counter}=useContext(UseCounter)
    return(
        <>
        <h1>this a globule counter</h1>
        <h2>{counter}</h2>
        <button onClick={counterHandler}>count</button>
        
        </>
    )
}

export default GlobuleCounter 