import * as React from 'react';
import { Card, List, Icon } from 'antd';
import { Street, createDefaultRankingListStreets } from '../../models/Street';
import { getRankingListData } from '../../api/RankingListApi';

const {
  Home: { RankingList: strings }
} = require('../../constants/strings');
import './RankingList.scss';

const useRankingListStreets = (): [Street[], () => Promise<void>] => {
  const [rankingListStreets, setRankingListStreets] = React.useState(
    createDefaultRankingListStreets
  );

  const loadRankingListData = async (): Promise<void> => {
    const streets = await getRankingListData();
    setRankingListStreets(streets);
  };

  return [rankingListStreets, loadRankingListData];
};

const Title = <span className="ranking-list-title">{strings.title}</span>;

export const RankingList = () => {
  const [rankingListStreets, loadRankingListData] = useRankingListStreets();

  React.useEffect(() => {
    setTimeout(loadRankingListData, 500);
  }, []);

  return (
    <Card
      className="MostCrowdedBoard"
      title={Title}
      bordered={false}
      headStyle={{ textAlign: 'center' }}
      bodyStyle={{ paddingTop: 20 }}
    >
      <List
        bordered={false}
        dataSource={rankingListStreets}
        renderItem={(item: Street) => <RankListItem street={item} />}
      />
    </Card>
  );
};

interface PropsRankListItem {
  street: Street;
}

const RankListItem = (props: PropsRankListItem) => {
  const { name, carFlow, humanFlow } = props.street;

  return (
    <List.Item>
      <div className="ranklist-item">
        <div className="ranklist-item-left">
          <Icon type="flag" className="flag-icon" />
          <span className="rank">{`${name}`}</span>
        </div>
        <span className="rate">{`${carFlow} / ${humanFlow}`}</span>
      </div>
    </List.Item>
  );
};
