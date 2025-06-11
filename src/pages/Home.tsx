import { FC,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import {Button,Typography} from 'antd'
import style from './Home.module.scss'
import {MANGER_LIST} from '../router/index'
import axios from 'axios'
const Home:FC = function(){
    const {Title,Paragraph} = Typography
    useEffect(()=>{
        axios.get('/api/test').then(res=>{
            console.log(res,"Ressss");
            
        })
    })
    const nav = useNavigate()
    return (
        <div className={style.context}>
            <Title>问卷调查--专业的问卷开发平台</Title>
            <Paragraph>已累计创建问卷10000份, 发布问卷100份, 收到答卷10000份</Paragraph>
            <Button type='primary' onClick={()=>{nav(MANGER_LIST)}}>开始使用</Button>
        </div>
    )
}
export default Home