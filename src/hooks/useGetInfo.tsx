import { useState, useEffect } from "react";

function getInfo():Promise<string>{
    return new Promise(res=>{
        setTimeout(()=>{
            res(Date.now().toString())
        },1500)
    })
}
function useGetInfo(){
    const [loading,setLoading] = useState(true)
    const [info,setInfo] = useState('')
    useEffect(()=>{
        getInfo().then(res=>{
            setInfo(res)
            setLoading(false)
        })
    },[])
    return{loading,info}
}

export default useGetInfo