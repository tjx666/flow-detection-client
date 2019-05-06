import * as React from 'react';
import _ from 'lodash';
import './style.scss';
import { streetsVideosAddress } from '../../../api/streetApi';

export const Detail = React.memo(() => {
    const [{ carFlow, humanFlow }, setFlowData] = React.useState({
        carFlow: 6,
        humanFlow: 10,
    });
    const videoAddress = React.useMemo(() => streetsVideosAddress[_.random(0, 8)], []);

    React.useEffect(() => {
        const timer = setInterval(() => {
            const newFlowData = {
                carFlow: _.random(2, 10),
                humanFlow: _.random(4, 15),
            };

            setFlowData(newFlowData);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <main className="admin-detail">
            <div className="detail-header">
                <span className="data-item">
                    <span className="data-desc">车流量:</span>
                    <span className="data-value">{carFlow}</span>
                </span>
                <span className="data-item">
                    <span className="data-desc">人流量:</span>
                    <span className="data-value">{humanFlow}</span>
                </span>
                <span className="data-item current-address">
                    <span className="data-desc">当前位置:</span>
                    <span className="data-value">紫阳大道</span>
                </span>
            </div>
            <div className="admin-detail-body">
                <div className="monitor-container">
                    <span>监控</span>
                    <video className="detail-monitor" src={videoAddress} controls />
                </div>
                <div className="thermal-map-container">
                    <span>热力图</span>
                    <img
                        className="detail-thermal-map"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556881105125&di=49eb598830ef5326de2d91ca66e069a2&imgtype=0&src=http%3A%2F%2Fimages.dtcj.com%2FDTCJ%2F88fe74feca25a6217b3665d355b0d23fad7daa65a6a48a2fd2cfb6850d71343d.jpg%3Fwidth%3D756%26height%3D505"
                    />
                </div>
            </div>
        </main>
    );
});
