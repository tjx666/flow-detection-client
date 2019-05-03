import * as React from 'react';
import { Input, Steps, Card, Popover } from 'antd';
import { CameraSelect } from '../../components';
import { StreetCamera } from '../../models/Street';
import './style.scss';
const Search = Input.Search;
const Step = Steps.Step;

export const Detail = React.memo(() => {
    const cameras: StreetCamera[] = [
        {
            serialNumber: 1,
            carFlow: 3,
            humanFlow: 10,
            videoAddress: '',
        },
        {
            serialNumber: 2,
            carFlow: 4,
            humanFlow: 8,
            videoAddress: '',
        },
        {
            serialNumber: 3,
            carFlow: 6,
            humanFlow: 12,
            videoAddress: '',
        },
        {
            serialNumber: 4,
            carFlow: 5,
            humanFlow: 8,
            videoAddress: '',
        },
    ];
    const steps = [
        {
            title: '紫阳大道',
            description: '起点，道路通畅。',
        },
        {
            title: '福州路',
            description: '车流量: 4， 人流量: 10。道路通畅。',
        },
        {
            title: '金山街道',
            description: '车流量: 1， 人流量: 3。道路通畅。',
        },
        {
            title: '江科后街',
            description: '车流量: 2， 人流量: 10。道路通畅。',
        },
        {
            title: '青山路街道',
            description: '终点。车流量: 5， 人流量: 10。有点拥挤。',
        },
    ];
    const renderPopoverContent = (index: number, status: string, title: string, description: string) => {
        return (
            <span>
                {index}-{title} 状态: {status === 'process' ? '进行中' : '等待'}
            </span>
        );
    };

    const customDot = (dot: any, { status, index, title, description }: any) => {
        return <Popover content={renderPopoverContent(index, status, title, description)}>{dot}</Popover>;
    };

    return (
        <main className="detail">
            <div className="detail-header">
                <div className="detail-header-address">
                    <span className="hint">当前位置:</span>
                    <span className="current-address">紫阳大道</span>
                </div>
                <CameraSelect cameras={cameras} />
                <Search
                    className="search-path-box"
                    placeholder="输入目的地"
                    enterButton="确定"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </div>
            <Card className="recommend" title="推荐路线" bordered={false}>
                <Steps current={0} progressDot={customDot}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} description={item.description} />
                    ))}
                </Steps>
            </Card>
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
