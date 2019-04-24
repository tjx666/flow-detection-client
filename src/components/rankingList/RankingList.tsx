import * as React from 'react'
import classnames from 'classnames'
import { Card, List, Icon, Select } from 'antd'
import { Street } from '../../models/Street'
import './RankingList.scss'

const Option = Select.Option

const Title = () => {
    return (
        <p className="ranking-list-title-container">
            <span className="title">拥挤街道 Top 10</span>
            <span className="sub-title">车流量 / 人流量</span>
        </p>
    )
}

const Configuration = () => {
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

interface PropsRankListItem {
    street: Street
    isSelected?: boolean
}

const RankListItem = ({ street }: PropsRankListItem) => {
    const { name, carFlow, humanFlow } = street

    return (
        <List.Item className="ranklist-item">
            <Icon type="flag" className="flag-icon" />
            <span className="rank">{`${name}`}</span>
            <span className="rate">{`${carFlow} / ${humanFlow}`}</span>
        </List.Item>
    )
}

interface RankingListProps {
    listData: Street[]
}

const cardBodyStyle: React.CSSProperties = {
    padding: '10px 20px',
    paddingBottom: 18,
}

export const RankingList = ({ listData }: RankingListProps) => {
    return (
        <Card
            className="ranking-list"
            title={<Title />}
            bordered={false}
            headStyle={{ textAlign: 'center', height: 80 }}
            bodyStyle={cardBodyStyle}
        >
            <List
                className="street-list"
                bordered={false}
                dataSource={listData}
                renderItem={(item: Street) => <RankListItem street={item} />}
            />
            <Configuration />
        </Card>
    )
}
