import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, Detail, Login } from './pages';
import './App.scss';

const { Content, Footer } = Layout;

const checkLogin = (): boolean => {
    return false;
};

export const App = () => (
    <Layout className="app">
        <Content className="content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/login" component={Login} />
                <Redirect to="/login" />
            </Switch>
        </Content>
        <Footer className="footer">Flow detection &copy;2019 Create by CLFStudio</Footer>
    </Layout>
);
