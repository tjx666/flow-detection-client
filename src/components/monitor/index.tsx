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
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556881105125&di=49eb598830ef5326de2d91ca66e069a2&imgtype=0&src=http%3A%2F%2Fimages.dtcj.com%2FDTCJ%2F88fe74feca25a6217b3665d355b0d23fad7daa65a6a48a2fd2cfb6850d71343d.jpg%3Fwidth%3D756%26height%3D505"
            />
            <Button type="primary" block>
                <Link to="/detail">查看详情 ></Link>
            </Button>
        </Card>
    );
});
