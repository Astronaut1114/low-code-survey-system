import { FC, useState } from "react";
import { Button, Space, Tag, Divider } from 'antd'
import { StarOutlined, EditFilled, DeleteOutlined, CopyFilled, LineChartOutlined } from '@ant-design/icons'
import style from './Item.module.scss'
type Props = {
    id: string,
    title: string,
    isPublish: boolean,
    isStar:boolean,
    edit?: (id: string) => void,
    del?: (id: string) => void
}
const Item: FC<Props> = props => {
    let { id, title, isPublish,isStar, edit, del } = props
    return (
        <div className={style.container}>
            <Space className={style.top}>
                <div>
                    <Space>
                    {isStar ? <StarOutlined style={{color:'red'}}></StarOutlined>:''}
                        {title}
                    </Space>
                </div>
                <div>
                    {isPublish ? <Tag color="processing">已发布</Tag> : <Tag >未发布</Tag>}
                    答卷 5 3月10日 13:23
                </div>

            </Space>
            <Divider style={{ margin: '12px 0' }} />
            <Space className={style.bottom}>
                <div>
                    <Space>
                        <Button icon={<EditFilled />} size="small" type="text">编辑问卷</Button>
                        <Button icon={<LineChartOutlined />} size="small" type="text">问卷统计</Button>
                    </Space>
                </div>
                <div>
                    <Space>
                        <Button icon={<StarOutlined></StarOutlined>} size="small" type="text">{isStar?'取消标星':'标星'}</Button>
                        <Button icon={<CopyFilled></CopyFilled>} size="small" type="text">复制</Button>
                        <Button icon={<DeleteOutlined></DeleteOutlined>} size="small" type="text">删除</Button>
                    </Space>
                </div>
            </Space>
        </div>
    )
}

export default Item