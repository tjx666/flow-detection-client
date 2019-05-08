import * as React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Card, Button } from 'antd';
import { CameraSelect } from '../cameraSelect';
import './style.scss';
import { Street, StreetCamera } from '../../models/Street';

interface DataPanelProps {
    street: Street;
    currentCamera: StreetCamera;
    onSelectCamera: (index: number) => void;
}

const DataPanel = React.memo(({ street, currentCamera, onSelectCamera }: DataPanelProps) => {
    const { name: streetName } = street;
    const { carFlow, humanFlow } = currentCamera;
    const handleSelect = (index: number) => onSelectCamera(index);
    return (
        <div className="data-panel">
            <h3 className="data-panel-header">{streetName}</h3>
            <div className="data-panel-body">
                <div className="street-data">
                    <span>{`车流量: ${carFlow}`}</span>
                    <span>{`人流量: ${humanFlow}`}</span>
                </div>
                <CameraSelect cameras={street.cameras} onSelect={handleSelect} />
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
    const handleSelectCamera = (index: number) => {
        setCamera(street.cameras[index]);
    };
    const bg = require('../../assets/images/bg.jpg');
    const addr = require('../../assets/images/result.gif');
    console.log('addr', street.name)
    const videoSrc = street.name === '当前未选择' ? bg : addr;

    return (
        <Card
            className="monitor"
            title={MonitorTitle}
            headStyle={{ textAlign: 'center' }}
            bodyStyle={bodyStyle}
            bordered
        >
            <DataPanel street={street} currentCamera={currentCamera} onSelectCamera={handleSelectCamera} />
            <video
                 autoPlay
                 className="player"
                 src={videoAddress}
                 controls
             />
            <img className="thermal-map" alt="当前未选择摄像头" src={videoSrc} />
            <Button type="primary" block>
                <Link to="/admin/detail">查看详情 ></Link>
            </Button>
        </Card>
    );
});
