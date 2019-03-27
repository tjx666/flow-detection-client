import * as React from 'react'
import { Card, List, Icon } from 'antd'
import { Street } from '../../models/Street'
import './RankingList.scss'

const Title = (
    <p className="title-container">
        <span className="title">拥挤街道 Top 10</span>
        <span className="sub-title">车流量 / 人流量</span>
    </p>
)

const cardBodyStyle: React.CSSProperties = {
    padding: '10px 20px',
    paddingBottom: 18,
}

interface Props {
    listData: Street[]
}

export const RankingList = (props: Props) => {
    const { listData } = props

    return (
        <Card
            className="ranking-list"
            title={Title}
            bordered={false}
            headStyle={{ textAlign: 'center', height: 80 }}
            bodyStyle={cardBodyStyle}
        >
            <List
                bordered={false}
                dataSource={listData}
                renderItem={(item: Street) => <RankListItem street={item} />}
            />
        </Card>
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
