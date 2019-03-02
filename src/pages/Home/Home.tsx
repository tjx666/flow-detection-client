import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import './Home.scss';

class App extends Component {
  render() {
    const logoPath: string = require('../../assets/images/clf.jpg');

    return (
      <Layout className="home">
        <Header className="header">
          <img className="logo" src={logoPath} alt="丛林蜂工作室" />
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

        <Content className="home-content" />

        <Footer style={{ textAlign: 'center' }}>
          Flow detection ©2019 Create by YuTengjing
        </Footer>
      </Layout>
    );
  }
}

export default App;
