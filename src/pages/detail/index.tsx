import * as React from 'react';
import './style.scss';

export const Detail = React.memo(() => {
    return (
        <main className="detail">
            <div className="detail-header">
                <span className="data-item">
                    <span className="data-desc">车流量:</span>
                    <span className="data-value">6</span>
                </span>
                <span className="data-item">
                    <span className="data-desc">人流量:</span>
                    <span className="data-value">10</span>
                </span>
                <span className="data-item current-address">
                    <span className="data-desc">当前位置:</span>
                    <span className="data-value">紫阳大道</span>
                </span>
            </div>
            <div className="detail-body">
                <div className="monitor-container">
                    <span>监控</span>
                    <img className="detail-monitor" src="https://i.loli.net/2019/05/03/5ccc22980d0af.png" />
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
