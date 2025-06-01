import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Button, Space, Divider, ConfigProvider } from 'antd';
import { EditOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom'
import style from './ManageLayout.module.scss'
import { createStyles } from 'antd-style';
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const ManageLayout: FC = () => {
  const { pathname } = useLocation()
  const nav = useNavigate()
  const { styles } = useStyle()
  return (
    <div className={style.container}>
      <Space direction='vertical'>
        <div className={style.left}>

          <ConfigProvider
            button={{
              className: styles.linearGradientButton,
            }}
          >
            <Button type='primary' style={{ width: '120px' }} size="large">新建问卷</Button>
            <Divider style={{ borderTop: 'transpart' }} />
            <Space direction='vertical'>
              <Button type={pathname === '/manage/list' ? 'primary' : 'default'} size="large" icon={<EditOutlined />} style={{ width: '120px' }} onClick={() => nav('/manage/list')}>
                我的问卷
              </Button>
              <Button type={pathname === '/manage/star' ? 'primary' : 'default'} size="large" icon={<StarOutlined />} style={{ width: '120px' }} onClick={() => nav('/manage/star')}>星标问卷</Button>
              <Button type={pathname === '/manage/trash' ? 'primary' : 'default'} size="large" icon={<DeleteOutlined />} style={{ width: '120px' }} onClick={() => nav('/manage/trash')}>回收站</Button>
            </Space>
          </ConfigProvider>
        </div>
      </Space>
      <div className={style.right}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default ManageLayout