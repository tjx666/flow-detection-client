import * as React from 'react'
import { Card, List, Icon, Select } from 'antd'
import { Street } from '../../models/Street'
import './RankingList.scss'

const Option = Select.Option

const Title = () => (
    <p className="ranking-list-title-container">
        <span className="title">拥挤街道 Top 10</span>
        <span className="sub-title">车流量 / 人流量</span>
    </p>
)

const cardBodyStyle: React.CSSProperties = {
    padding: '10px 20px',
    paddingBottom: 18,
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
                    <Option value="1">按车流量排序</Option>
                    <Option value="2">按人流量排序</Option>
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
}

const RankListItem = (props: PropsRankListItem) => {
    const { name, carFlow, humanFlow } = props.street

    return (
        <List.Item className="ranklist-item">
            <Icon type="flag" className="flag-icon" />
            <span className="rank">{`${name}`}</span>
            <span className="rate">{`${carFlow} / ${humanFlow}`}</span>
        </List.Item>
    )
}

interface Props {
    listData: Street[]
}

export const RankingList = (props: Props) => {
    const { listData } = props

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
