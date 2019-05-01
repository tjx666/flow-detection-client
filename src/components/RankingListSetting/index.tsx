import * as React from 'react';
import { Select, Tooltip } from 'antd';
import './style.scss';
const Option = Select.Option;

interface RankingListSettingProps {
    onChangeSetting: (settingItem: string, newValue: string) => void;
}

export const RankingListSetting = React.memo(
    ({ onChangeSetting }: RankingListSettingProps) => {
        const handleChangeSetting = React.useCallback((settingItem: string) => {
            return (value: string) => {
                onChangeSetting(settingItem, value);
            };
        }, []);

        return (
            <div className="ranking-list-setting">
                <div className="setting-item">
                    <Tooltip title="选择排序方式">
                        <label htmlFor="select-sort-way">排序方式:</label>
                    </Tooltip>
                    &nbsp;
                    <Select
                        id="select-sort-way"
                        defaultValue="car-flow"
                        style={{ width: 120 }}
                        onChange={handleChangeSetting('sort-way')}
                    >
                        <Option value="car-flow">车流量</Option>
                        <Option value="human-flow">人流量</Option>
                    </Select>
                </div>
            </div>
        );
    }
);
