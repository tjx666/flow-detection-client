import * as React from 'react';
import { Popover, Input, Steps, Card } from 'antd';
import { StreetCamera } from '../../../models/Street';
import './style.scss';
const Search = Input.Search;
const Step = Steps.Step;

export const Recommend = () => {
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

    const handleSelectCamera = () => {};

    return (
        <main className="recommend">
            <div className="recommend-header">
                <div className="current-address">
                    <span className="hint">当前位置:</span>
                    <span className="address">紫阳大道</span>
                </div>
                <Search
                    className="search-path-box"
                    placeholder="输入目的地"
                    enterButton="确定"
                    size="large"
                    onSearch={value => console.log(value)}
                />
            </div>
            <Card className="recommend-path" title="推荐路线" bordered={false}>
                <Steps current={0} progressDot={customDot}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} description={item.description} />
                    ))}
                </Steps>
            </Card>
        </main>
    );
};
