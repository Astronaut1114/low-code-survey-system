import { FC ,useState} from "react";
import Item from '../../components/Item'


const List:FC = function(){
    const [list,setList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
])

    return (
        <>
            {list.map(item=>{
                <Item id={item.id} title={item.title} isPublish={item.isPublished}></Item>
            })}
            <div>list</div>
        </>
    )
}
export default List