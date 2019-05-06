import * as React from 'react';
import { Tooltip, Select, Icon } from 'antd';
import './style.scss';
import { StreetCamera } from '../../models/Street';
const { Option } = Select;

interface CameraSelectProps {
    cameras: StreetCamera[];
    onSelect: (index: number) => void;
}

export const CameraSelect = React.memo(({ cameras, onSelect }: CameraSelectProps) => {
    const CameraOptions = React.useMemo(() => {
        return cameras.map(({ serialNumber }) => (
            <Option key={`${serialNumber}`} value={serialNumber}>{`${serialNumber}号`}</Option>
        ));
    }, [cameras]);

    const handleChange = (value: string) => {
        onSelect(Number.parseInt(value) - 1);
    };

    return (
        <div className="camera-select">
            <Tooltip title="当前摄像头">
                <Icon className="camera-icon" type="camera" />
            </Tooltip>
            <Select defaultValue="1号" onChange={handleChange}>
                {CameraOptions}
            </Select>
        </div>
    );
});
