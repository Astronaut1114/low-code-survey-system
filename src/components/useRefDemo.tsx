import React ,{FC, useRef} from "react";

const Demo:FC = ()=>{
    const inputRef = useRef<HTMLInputElement>(null)
    const getInput = ()=>{
        console.log(inputRef.current?.value,"inputRef.current");
        
    }
    return (
        <>
            <input ref={inputRef} defaultValue={"默认值"}/>
            <button onClick={getInput}>获取</button>
        </>
    )
}
export default Demo