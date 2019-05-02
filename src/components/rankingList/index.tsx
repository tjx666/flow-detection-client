import * as React from 'react';
import { Card, List, message } from 'antd';
import _ from 'lodash';
import { RankListItem } from '../rankingListItem';
import { RankingListSetting } from '../RankingListSetting';
import { Street } from '../../models/Street';
import { getRankingList } from '../../api/streetApi';
import './style.scss';

interface ItemType {
    rank: number;
    street: Street;
}

const cardBodyStyle: React.CSSProperties = {
    padding: '10px 20px',
    paddingBottom: 18,
};

interface RankingListProps {
    onSelectStreet: (street: Street) => void;
}

export const RankingList = ({ onSelectStreet }: RankingListProps) => {
    const RANKING_LIST_LENGTH = 10;
    const [streetsItems, setStreetsItems] = React.useState<ItemType[]>([]);
    const [sortWay, setSortWay] = React.useState<string>('car-flow');
    const sortWayRef = React.useRef<string>(null);

    React.useEffect(() => {
        sortWayRef.current = sortWay;
    });

    const loadStreetList = async () => {
        const streets = await getRankingList();
        const newStreetItems = streets
            .sort((street1, street2) => {
                return sortWayRef.current === 'car-flow'
                    ? _.mean(street2.cameras.map(camera => camera.carFlow)) -
                          _.mean(street1.cameras.map(camera => camera.carFlow))
                    : _.mean(street2.cameras.map(camera => camera.humanFlow)) -
                          _.mean(street1.cameras.map(camera => camera.humanFlow));
            })
            .slice(0, RANKING_LIST_LENGTH)
            .map<ItemType>((item, index) => ({
                street: item,
                rank: index + 1,
            }));

        setStreetsItems(newStreetItems);
    };

    React.useEffect(() => {
        loadStreetList();
        const timer = setInterval(async () => {
            await loadStreetList();
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const handleChangeSetting = React.useCallback((settingItem: string, newValue: string) => {
        if (settingItem === 'sort-way') {
            setSortWay(newValue);

            if (newValue === 'car-flow') {
                message.info('排序方式已切换为按车流量排序', 2);
            } else if (newValue === 'human-flow') {
                message.info('排序方式已切换为按人流量排序', 2);
            }
        }
    }, []);

    const handleSelect = React.useCallback((street: Street) => {
        onSelectStreet(street);
    }, []);

    const RankingListTitle = React.useMemo(() => {
        return (
            <p className="ranking-list-title-container">
                <span className="title">Top 10</span>
                <span className="sub-title">车流量 / 人流量</span>
            </p>
        );
    }, []);

    return (
        <Card
            className="ranking-list"
            title={RankingListTitle}
            bordered={false}
            headStyle={{ textAlign: 'center', height: 60 }}
            bodyStyle={cardBodyStyle}
        >
            <List
                className="street-list"
                bordered={false}
                dataSource={streetsItems}
                renderItem={(item: ItemType) => (
                    <RankListItem rank={item.rank} street={item.street} onSelect={handleSelect} />
                )}
            />
            <RankingListSetting onChangeSetting={handleChangeSetting} />
        </Card>
    );
};
