import * as React from 'react'
import { Select } from 'antd'
import './style.scss'
const Option = Select.Option

interface RankingListSettingProps {
    onChangeSetting: (settingItem: string, newValue: string) => void
}

export const RankingListSetting = ({
    onChangeSetting,
}: RankingListSettingProps) => {
    const handleChangeSetting = (settingItem: string) => {
        return (value: string) => {
            onChangeSetting(settingItem, value)
        }
    }

    return (
        <div className="ranking-list-setting">
            <div className="setting-item">
                <label htmlFor="select-sort-way">排序方式:</label>
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
            <div className="setting-item">
                <label htmlFor="select-load">选择线路:</label>
                &nbsp;
                <Select
                    id="select-load"
                    defaultValue="1"
                    style={{ width: 120 }}
                    onChange={handleChangeSetting('path')}
                >
                    <Option value="1">一号线路</Option>
                    <Option value="2">二号线路</Option>
                    <Option value="3">三号线路</Option>
                    <Option value="4">四号线路</Option>
                </Select>
            </div>
        </div>
    )
}
