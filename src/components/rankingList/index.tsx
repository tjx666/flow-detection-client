import * as React from 'react';
import { Card, List, message } from 'antd';
import { RankListItem } from '../rankingListItem';
import { RankingListSetting } from '../RankingListSetting';
import { Street } from '../../models/Street';
import { getRankingListData } from '../../api/streetApi';
import './style.scss';

const RankingListTitle = () => {
    return (
        <p className="ranking-list-title-container">
            <span className="title">Top 10</span>
            <span className="sub-title">车流量 / 人流量</span>
        </p>
    );
};

interface ItemType {
    rank: number;
    street: Street;
}

const cardBodyStyle: React.CSSProperties = {
    padding: '10px 20px',
    paddingBottom: 18,
};
let timer: NodeJS.Timeout;

let __sortWay__: string;
export const RankingList = () => {
    const [streetsItems, setStreetsItems] = React.useState<ItemType[]>([]);
    const [sortWay, setSortWay] = React.useState<string>('car-flow');
    __sortWay__ = sortWay;
    const RANKING_LIST_LENGTH = 10;

    React.useEffect(() => {
        setInterval(async () => {
            const streets = await getRankingListData();
            const newStreetItems = streets
                .sort((street1, street2) => {
                    return sortWay === __sortWay__
                        ? street2.carFlow - street1.carFlow
                        : street2.humanFlow - street1.humanFlow;
                })
                .slice(0, RANKING_LIST_LENGTH)
                .map(
                    (item, index): ItemType => ({
                        street: item,
                        rank: index + 1,
                    })
                );

            setStreetsItems(newStreetItems);
        }, 500);
    }, [sortWay]);

    const handleChangeSetting = (settingItem: string, newValue: string) => {
        if (settingItem === 'sort-way') {
            setSortWay(newValue);

            if (newValue === 'car-flow') {
                message.info('排序方式已切换为按车流量排序', 2);
            } else if (newValue === 'human-flow') {
                message.info('排序方式已切换为按人流量排序', 2);
            }
        } else if (settingItem === 'path') {
            //
        }
    };

    return (
        <Card
            className="ranking-list"
            title={<RankingListTitle />}
            bordered={false}
            headStyle={{ textAlign: 'center', height: 60 }}
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
            <RankingListSetting onChangeSetting={handleChangeSetting} />
        </Card>
    );
};
