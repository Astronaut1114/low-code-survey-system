import React, { FC, useState } from "react";
import { Table,Tag } from 'antd'
import type { TableProps} from 'antd'
const listData = [
    { id: 'q1', title: '问卷1', isPublished: false, isStar: true, createAt: '2024年3月2日' },
    { id: 'q2', title: '问卷2', isPublished: true, isStar: true, createAt: '2024年3月2日' },
    { id: 'q3', title: '问卷3', isPublished: false, isStar: true, createAt: '2024年3月2日' },
    { id: 'q4', title: '问卷4', isPublished: true, isStar: true, createAt: '2024年3月2日' },
]
const Trash: FC = function () {
    const [list, setList] = useState(listData);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: '是否发布',
            dataIndex: 'isPublished',
            key: 'isPublished',
            render:(value:boolean)=>{ return value ? <Tag color="processing">已发布</Tag> :<Tag>未发布</Tag>}
        },
        {
            title: '是否标星',
            dataIndex: 'isStar',
            key: 'isStar',
            render:(value:boolean)=><div>{value ? '是' :'否'}</div>
        },
        {
            title: '创建日期',
            dataIndex: 'createAt',
            key: 'createAt'
        }
    ];
    return (
        <>
            <Table columns={columns} dataSource={list} pagination={false} rowKey={q=>q.id}/>
        </>
    )
}
export default Trash