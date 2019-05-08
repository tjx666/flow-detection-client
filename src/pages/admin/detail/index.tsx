import * as React from 'react';
import _ from 'lodash';
import './style.scss';
import { streetsVideosAddress } from '../../../api/streetApi';

export const Detail = React.memo(() => {
    const [{ carFlow, humanFlow }, setFlowData] = React.useState({
        carFlow: 6,
        humanFlow: 10,
    });
    const videoAddress = React.useMemo(() => streetsVideosAddress[_.random(5, 5)], []);

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
                    <video className="detail-monitor" src={videoAddress} autoPlay controls />
                </div>
                <div className="thermal-map-container">
                    <span>热力图</span>
                    <img
                        className="detail-thermal-map"
                        src={require('../../../assets/images/result.gif')}
                    />
                </div>
            </div>
        </main>
    );
});
