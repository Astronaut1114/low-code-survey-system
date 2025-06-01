import { FC } from "react";
import { Outlet } from "react-router-dom"; 
import { Layout } from "antd";
import  Logo  from "../components/Logo";
import style from './MainLayout.module.scss'
const MainLayout:FC = ()=>{
    const {Header,Footer,Content,Sider} = Layout
    return(
        <Layout>
            <Header className={style.header}>
                <Logo></Logo>
            </Header>
            <Content className={style.main}>
                <Outlet></Outlet>
            </Content>
            <Footer className={style.footer}>低代码问卷中心 &copy; 2025 - present Created by 0413Studio</Footer>
        </Layout>
    )
}

export default MainLayout