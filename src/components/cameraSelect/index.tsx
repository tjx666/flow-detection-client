import * as React from 'react';
import { Tooltip, Select, Icon } from 'antd';
import './style.scss';
import { StreetCamera } from '../../models/Street';
const { Option } = Select;

interface CameraSelectProps {
    cameras: StreetCamera[];
}

export const CameraSelect = React.memo(({ cameras }: CameraSelectProps) => {
    const CameraOptions = React.useMemo(() => {
        return cameras.map(({ serialNumber }) => (
            <Option key={`${serialNumber}`} value={serialNumber}>{`${serialNumber}号`}</Option>
        ));
    }, [cameras]);

    return (
        <div className="camera-select">
            <Tooltip title="当前摄像头">
                <Icon className="camera-icon" type="camera" />
            </Tooltip>
            <Select defaultValue="1">{CameraOptions}</Select>
        </div>
    );
});
