import * as React from 'react'
import { Layout, Menu, Avatar } from 'antd'
import { Switch, Route, Link } from 'react-router-dom'
import { Home, Detail } from './pages'
import './App.scss'

const { Header, Content, Footer } = Layout
const logoPath = require('./assets/images/clf.jpg')

export const App = () => (
    <Layout className="app">
        <Header className="header">
            <Link to="/">
                <Avatar src={logoPath} alt="丛林蜂工作室" size={48} />
            </Link>
            <span className="title">人流检测控制台</span>
            <Menu
                className="menu"
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                <Menu.Item key="4">nav 4</Menu.Item>
            </Menu>
        </Header>
        <Content>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </Switch>
        </Content>
        <Footer className="footer">{`Flow detection ©2019 Create by CLFStudio`}</Footer>
    </Layout>
)
