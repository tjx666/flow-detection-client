import * as React from 'react'
import { Card, List } from 'antd'
import { RankListItem } from '../rankingListItem'
import { RankListSetting } from '../RankingListSetting'
import { Street } from '../../models/Street'
import { getRankingListData } from '../../api/streetApi'
import './style.scss'

const RankingListTitle = () => {
    return (
        <p className="ranking-list-title-container">
            <span className="title">拥挤街道 Top 10</span>
            <span className="sub-title">车流量 / 人流量</span>
        </p>
    )
}

const cardBodyStyle: React.CSSProperties = {
    padding: '10px 20px',
    paddingBottom: 18,
}

interface ItemType {
    rank: number
    street: Street
}

export const RankingList = () => {
    const [streetsItems, setStreetsItems] = React.useState<ItemType[]>([])
    const RANKING_LIST_LENGTH = 10

    React.useEffect(() => {
        setInterval(async () => {
            const streets = await getRankingListData()
            const newStreetItems = streets
                .sort((street1, street2) => street1.carFlow - street2.carFlow)
                .slice(0, RANKING_LIST_LENGTH)
                .map(
                    (item, index): ItemType => ({
                        street: item,
                        rank: index + 1,
                    })
                )

            setStreetsItems(newStreetItems)
        }, 500)
    }, [])

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
                dataSource={streetsItems}
                renderItem={(item: ItemType) => (
                    <RankListItem rank={item.rank} street={item.street} />
                )}
            />
            <RankListSetting />
        </Card>
    )
}
