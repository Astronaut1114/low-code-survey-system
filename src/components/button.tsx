import React, {FC,useState} from "react";

const Button:FC = ()=>{
    const [count,setCount] = useState(0)
    const addCount = ()=>{
        setCount(count=>count + 1)
        setCount(count=>count + 1)
        setCount(count=>count + 1)
        setCount(count=>count + 1)
        console.log(count)
    }
    return(
        <>  
            <button onClick={addCount}>{count}</button>
        </>
    )
}
export default Button