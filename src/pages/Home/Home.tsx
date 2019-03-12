import * as React from 'react';
import { Layout, Menu, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
import { RankingList } from '../../containers/MostCrowdedStreetBoard/RankingList';

import { Home as strings } from '../../constants/strings';
import './Home.scss';
const logoPath = require('../../assets/images/clf.jpg');

export const Home = () => {
  return (
    <Layout className="home">
      <Header className="header">
        <Avatar className="logo" src={logoPath} alt="丛林蜂工作室" size={50} />
        <span className="title">{strings.title}</span>
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

      <Content className="home-content">
        <RankingList />
      </Content>

      <Footer style={{ textAlign: 'center' }}>{strings.copyright}</Footer>
    </Layout>
  );
};
