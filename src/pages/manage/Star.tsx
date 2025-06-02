import { FC,useState } from "react";
 import Item from '../../components/Item'
const Star:FC = function(){
    const [list, setList] = useState([
        { id: 'q1', title: '问卷1', isPublished: false, isStar: true },
        { id: 'q2', title: '问卷2', isPublished: true, isStar: true },
        { id: 'q3', title: '问卷3', isPublished: false, isStar: true },
        { id: 'q4', title: '问卷4', isPublished: true, isStar: true },
    ])

    return (
        <>
            {list.map(item => {
                return <Item id={item.id} title={item.title} isPublish={item.isPublished} isStar={item.isStar}></Item>
            })}
            <div>list</div>
        </>
    )
}
export default Star