import * as React from 'react';
import { Layout } from 'antd';
import { AdminRoutes } from './pages/admin/index';
import { UserRoutes } from './pages/user/index';
import './App.scss';

const { Content, Footer } = Layout;

const pathname = window.location.pathname;
if (sessionStorage.getItem('isLogin') !== 'true' && pathname.includes('/admin') && pathname !== '/admin/login') {
    window.location.href = 'http://localhost:3000/admin/login';
}

export const App = () => (
    <Layout className="app">
        <Content className="content">
            <AdminRoutes />
            <UserRoutes />
        </Content>
        <Footer className="footer">Flow detection &copy;2019 Create by CLFStudio</Footer>
    </Layout>
);
