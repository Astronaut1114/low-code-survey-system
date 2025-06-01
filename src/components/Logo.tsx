import { FC } from "react";
import {Space,Typography} from 'antd'
import {HighlightOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import style from './Logo.module.scss'
 const Logo:FC = ()=>{
    const {Title,Text,Paragraph} = Typography
    return(
        <Link to='/home'>
            <div className={style.logo_title}>  
                <Space>
                    <Title ><HighlightOutlined /></Title>
                    <Title >低代码平台</Title>
                    <Text className={style.logo_text}>create by 0413Studio</Text>
                </Space>
            </div>
        </Link>
    )
}
export default Logo;