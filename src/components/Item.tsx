import { FC,useState } from "react";
type Props = {
    id:string,
    title:string,
    isPublish:boolean,
    edit?:(id:string)=>void,
    del?:(id:string)=>void
}
const Item:FC<Props> = props=>{
    let {id,title,isPublish,edit,del} = props
    return(
        <>
            <div>{title}</div>
        </>
    )
}

export default Item