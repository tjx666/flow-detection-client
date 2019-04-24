import * as React from 'react'
import { Select } from 'antd'
import './style.scss'
const Option = Select.Option

export const RankListSetting = () => {
    return (
        <div className="configuration">
            <div className="configuration-item">
                <label htmlFor="select-sort-way">排序方式:</label> &nbsp;
                <Select
                    id="select-sort-way"
                    defaultValue="1"
                    style={{ width: 120 }}
                >
                    <Option value="1">车流量</Option>
                    <Option value="2">人流量</Option>
                </Select>
            </div>
            <div className="configuration-item">
                <label htmlFor="select-load">选择线路:</label> &nbsp;
                <Select
                    id="select-load"
                    defaultValue="1"
                    style={{ width: 120 }}
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
