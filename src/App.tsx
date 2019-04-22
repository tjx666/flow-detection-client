import * as React from 'react'
import { Layout } from 'antd'
import { Switch, Route } from 'react-router-dom'
import { Home, Detail } from './pages'
import './App.scss'

const { Content, Footer } = Layout

export const App = () => (
    <Layout className="app">
        <Content className="content">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </Switch>
        </Content>
        <Footer className="footer">{`Flow detection ©2019 Create by CLFStudio`}</Footer>
    </Layout>
)
