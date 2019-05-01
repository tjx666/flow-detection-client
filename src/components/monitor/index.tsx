import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import { CameraSelect } from '../cameraSelect';
import './style.scss';
import { Street } from '../../models/Street';

interface DataPanelProps {
    carFlow: number;
    humanFlow: number;
}

const DataPanel = React.memo(({ carFlow, humanFlow }: DataPanelProps) => {
    return (
        <div className="data-panel">
            <div className="street-data">
                <span>{`车流量: ${carFlow}`}</span>
                <span>{`人流量: ${humanFlow}`}</span>
            </div>
            <CameraSelect />
        </div>
    );
});

interface MonitorProps {
    street: Street;
}

const bodyStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

export const Monitor = React.memo(({ street }: MonitorProps) => {
    const videoAddress = street.cameras[0].videoAddress;
    const MonitorTitle = React.useMemo(() => <span className="title">{`监控`}</span>, []);

    return (
        <Card className="monitor" title={MonitorTitle} headStyle={{ textAlign: 'center' }} bodyStyle={bodyStyle} bordered>
            <DataPanel carFlow={10} humanFlow={30} />
            <video className="player" src={videoAddress} preload="auto" poster="http://www.w3school.com.cn/i/w3school_logo_black.gif" controls />
            <img className="thermal-map" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1603182816,1362687610&fm=26&gp=0.jpg" />
            <Button type="primary" block>
                <Link to="/detail">查看详情 ></Link>
            </Button>
        </Card>
    );
});
