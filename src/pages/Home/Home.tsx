import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

import './Home.scss'

class App extends Component {
    render() {
        const logoPath: string = require('../../assets/images/clf.jpg')

        return (
            <Layout className="home">
                <Header className="header">
                    <img className="logo" src={logoPath} alt="丛林蜂工作室" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: '0 50px' }}>
                    <div
                        style={{
                            background: '#fff',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Create by YuTengjing
                </Footer>
            </Layout>
        )
    }
}

export default App
