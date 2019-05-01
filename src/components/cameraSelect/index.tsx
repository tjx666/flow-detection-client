import * as React from 'react';
import { Tooltip, Select, Icon } from 'antd';
import './style.scss';
const { Option } = Select;

interface CameraSelectProps {}

export const CameraSelect = React.memo(({  }: CameraSelectProps) => {
    return (
        <div className="camera-select">
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
    );
});
