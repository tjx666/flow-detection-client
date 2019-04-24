import * as React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'
import './style.scss'

const Title = () => <span className="title">{`监控`}</span>

interface DataPanelProps {
    carFlow: number
    humanFlow: number
}

const DataPanel = ({ carFlow, humanFlow }: DataPanelProps) => {
    return (
        <div className="data-panel">
            <span>{`车流量: ${carFlow}`}</span>
            <span>{`人流量: ${humanFlow}`}</span>
        </div>
    )
}

const bodyStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

interface MonitorProps {
    videoLink: string
}

export const Monitor = ({ videoLink }: MonitorProps) => {
    return (
        <Card
            title={<Title />}
            headStyle={{ textAlign: 'center' }}
            className="monitor"
            bodyStyle={bodyStyle}
        >
            <video
                className="player"
                src={videoLink}
                preload="auto"
                poster="http://www.w3school.com.cn/i/w3school_logo_black.gif"
            />
            <DataPanel carFlow={200} humanFlow={200} />
            <img
                className="thermal-map"
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1603182816,1362687610&fm=26&gp=0.jpg"
            />
            <Button type="primary" block>
                <Link to="/detail">查看详情 ></Link>
            </Button>
        </Card>
    )
}
