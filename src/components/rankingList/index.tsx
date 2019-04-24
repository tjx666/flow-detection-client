import * as React from 'react'
import { Card, List, Select } from 'antd'
import { RankListItem } from '../rankingListItem'
import { Street } from '../../models/Street'
import './style.scss'

const Option = Select.Option

const RankingListTitle = () => {
    return (
        <p className="ranking-list-title-container">
            <span className="title">拥挤街道 Top 10</span>
            <span className="sub-title">车流量 / 人流量</span>
        </p>
    )
}

const RankListConfiguration = () => {
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

interface RankingListProps {
    streets: Street[]
}

const cardBodyStyle: React.CSSProperties = {
    padding: '10px 20px',
    paddingBottom: 18,
}

export const RankingList = ({ streets }: RankingListProps) => {
    const RANKING_LIST_LENGTH = 10

    interface ItemType {
        rank: number
        street: Street
    }

    const dataSource = streets
        .sort((street1, street2) => street1.carFlow - street2.carFlow)
        .slice(0, RANKING_LIST_LENGTH)
        .map((item, index): ItemType => ({ street: item, rank: index + 1 }))

    return (
        <Card
            className="ranking-list"
            title={<RankingListTitle />}
            bordered={false}
            headStyle={{ textAlign: 'center', height: 80 }}
            bodyStyle={cardBodyStyle}
        >
            <List
                className="street-list"
                bordered={false}
                dataSource={dataSource}
                renderItem={(item: ItemType) => (
                    <RankListItem rank={item.rank} street={item.street} />
                )}
            />
            <RankListConfiguration />
        </Card>
    )
}
