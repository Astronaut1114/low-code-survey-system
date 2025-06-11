import { FC, useState ,useEffect} from "react";
import {Input} from 'antd'
import {useNavigate,useSearchParams,useLocation} from 'react-router-dom'
import {LIST_SEARCH_PARAM_KEY} from '../common/index'
import type {ChangeEvent} from 'react'
interface Props{
    searchList:(value:string)=>void
}
 const ListSearch:FC<Props> = (props)=>{
    let {searchList} = props
    const {Search} = Input;
    const [value,setValue] =useState('') 
    const nav = useNavigate()
    const {pathname} = useLocation()
    const [searchParams] = useSearchParams()
    const onSearch =(val:string) =>{
        searchList(val)
        nav({
            pathname,
            search:`${LIST_SEARCH_PARAM_KEY}=${value}`
        })
    }
    useEffect(()=>{
        setValue(searchParams.get(LIST_SEARCH_PARAM_KEY) || '')
    },[searchParams])
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