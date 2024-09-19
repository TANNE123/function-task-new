import { useContext } from "react"
import { UseCounter } from "../../../App"




const GlobuleTheme=()=>{
    const {themeHandler,theme}=useContext(UseCounter)
    const style={width:"100",height:"100px", border:"2px solid",background:theme?"red":"green"}

    return(
        <>
        <h1>change color</h1>
        <div  style={style}  ></div>
        
        <button onClick={themeHandler}>change Theme</button>
        </>
    )
}

export default GlobuleTheme