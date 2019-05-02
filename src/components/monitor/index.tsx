import * as React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import { CameraSelect } from '../cameraSelect';
import './style.scss';
import { Street, StreetCamera } from '../../models/Street';

interface DataPanelProps {
    street: Street;
    currentCamera: StreetCamera;
}

const DataPanel = React.memo(({ street, currentCamera }: DataPanelProps) => {
    const { name: streetName } = street;
    const { carFlow, humanFlow } = currentCamera;
    return (
        <div className="data-panel">
            <h3 className="data-panel-header">{streetName}</h3>
            <div className="data-panel-body">
                <div className="street-data">
                    <span>{`车流量: ${carFlow}`}</span>
                    <span>{`人流量: ${humanFlow}`}</span>
                </div>
                <CameraSelect cameras={street.cameras} />
            </div>
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
    const initCamera = street.cameras[0];
    const [currentCamera, setCamera] = React.useState<StreetCamera>(initCamera);
    React.useEffect(() => setCamera(initCamera), [initCamera]);
    const { videoAddress } = currentCamera;
    const MonitorTitle = React.useMemo(() => <span className="title">{`监控`}</span>, []);

    return (
        <Card
            className="monitor"
            title={MonitorTitle}
            headStyle={{ textAlign: 'center' }}
            bodyStyle={bodyStyle}
            bordered
        >
            <DataPanel street={street} currentCamera={currentCamera} />
            <video
                className="player"
                src={videoAddress}
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
});
