import { FC, useState } from "react";
import {Input} from 'antd'
import type {ChangeEvent} from 'react'
interface Props{
    searchList:(value:string)=>void
}
 const ListSearch:FC<Props> = (props)=>{
    let {searchList} = props
    const {Search} = Input;
    const [value,setValue] =useState('') 
    const onSearch =(val:string) =>{
        searchList(val)
    }
    const handlerChange = (val:ChangeEvent<HTMLInputElement>)=>{
        setValue(val.target.value)
    }
    return(
      <>
           <Search placeholder="请输入关键词" allowClear value={value} onChange={handlerChange} onSearch={onSearch} style={{ width: 200 }} />
      </>
    )
}
export default ListSearch;