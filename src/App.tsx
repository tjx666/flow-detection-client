import React, { Component } from 'react'
import { Button } from 'antd'
import Home from './pages/Home/Home'

import './App.scss'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
            </div>
        )
    }
}

export default App
