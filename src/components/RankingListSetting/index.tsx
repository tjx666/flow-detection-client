import * as React from 'react';
import { Select, Tooltip, Radio } from 'antd';
import './style.scss';
import { RadioChangeEvent } from 'antd/lib/radio';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const Option = Select.Option;

interface RankingListSettingProps {
    onChangeSetting: (settingItem: string, newValue: string) => void;
}

export const RankingListSetting = React.memo(
    ({ onChangeSetting }: RankingListSettingProps) => {
        const handleChangeSetting = React.useCallback((settingItem: string) => {
            return (event: RadioChangeEvent) => {
                onChangeSetting(settingItem, event.target.value);
            };
        }, []);

        return (
            <div className="ranking-list-setting">
                <div className="setting-item">
                    <Tooltip title="选择排序方式">
                        <label
                            className="select-sort-way-hint"
                            htmlFor="select-sort-way"
                        >
                            排序方式:
                        </label>
                    </Tooltip>
                    &nbsp;
                    <RadioGroup
                        onChange={handleChangeSetting('sort-way')}
                        defaultValue="car-flow"
                    >
                        <RadioButton className="sort-way" value="car-flow">
                            车流量
                        </RadioButton>
                        <RadioButton className="sort-way" value="human-flow">
                            人流量
                        </RadioButton>
                    </RadioGroup>
                </div>
            </div>
        );
    }
);
