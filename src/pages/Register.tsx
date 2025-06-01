import { FC } from "react";
import { useNavigate } from "react-router-dom";
const Register:FC = function(){
    const nav = useNavigate()
    return (
        <>
            <div>Register</div>
            <button onClick={()=>nav(-1)}>返回</button>
        </>
    )
}
export default Register