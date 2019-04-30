import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Select, Icon, Tooltip } from 'antd';
import './style.scss';
const Option = Select.Option;

const MonitorTitle = () => <span className="title">{`监控`}</span>;

interface DataPanelProps {
    carFlow: number;
    humanFlow: number;
}

const DataPanel = ({ carFlow, humanFlow }: DataPanelProps) => {
    return (
        <div className="data-panel">
            <div className="street-data">
                <span>{`车流量: ${carFlow}`}</span>
                <span>{`人流量: ${humanFlow}`}</span>
            </div>
            <div className="select-camera-box">
                <Tooltip title="当前摄像头">
                    <Icon className="camera-icon" type="camera" />
                </Tooltip>
                <Select defaultValue="1">
                    <Option value="1">1 号</Option>
                    <Option value="2">2 号</Option>
                    <Option value="3">3 号</Option>
                    <Option value="4">4 号</Option>
                </Select>
            </div>
        </div>
    );
};

interface MonitorProps {
    videoLink: string;
}

const bodyStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

export const Monitor = ({ videoLink }: MonitorProps) => {
    return (
        <Card
            className="monitor"
            title={<MonitorTitle />}
            headStyle={{ textAlign: 'center' }}
            bodyStyle={bodyStyle}
            bordered
        >
            <DataPanel carFlow={10} humanFlow={30} />
            <video
                className="player"
                src={videoLink}
                preload="auto"
                poster="http://www.w3school.com.cn/i/w3school_logo_black.gif"
                controls
            />
            <img
                className="thermal-map"
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1603182816,1362687610&fm=26&gp=0.jpg"
            />
            <Button type="primary" block>
                <Link to="/detail">查看详情 ></Link>
            </Button>
        </Card>
    );
};
