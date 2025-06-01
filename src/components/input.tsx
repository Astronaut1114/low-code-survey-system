import { useState } from "react";

export default function Input() {
    const [value, setValue] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(value,"value");
        setValue(e.target.value);
    }
    return(
        <>
            <div>
                <input type="text" value={value} onChange={handleChange}/>
            </div>
        </>
    )
}
