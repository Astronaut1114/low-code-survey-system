import { FC, useState } from "react";
import Item from '../../components/Item'
import ListSearch from "../../components/ListSearch";
import {Typography,Divider} from 'antd'
const List: FC = function () {
    const [list, setList] = useState([
        { id: 'q1', title: '问卷1', isPublished: false, isStar: false },
        { id: 'q2', title: '问卷2', isPublished: true, isStar: true },
        { id: 'q3', title: '问卷3', isPublished: false, isStar: false },
        { id: 'q4', title: '问卷4', isPublished: true, isStar: true },
    ])
    const {Title} = Typography
    const handlerSearch = (val:string)=>{
        console.log('接受到的值',val);
    }
    return (
        <>  
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Title level={3}>我的问卷</Title>
                <ListSearch searchList={handlerSearch}></ListSearch>
            </div>
            <Divider style={{margin:'12px 0'}}></Divider>
            <div>
                {list.map(item => {
                    return <Item id={item.id} title={item.title} isPublish={item.isPublished} isStar={item.isStar}></Item>
                })}
                <div>list</div>
            </div>
        </>
    )
}
export default List