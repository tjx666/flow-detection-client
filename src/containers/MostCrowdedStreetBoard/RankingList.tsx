import * as React from 'react';
import { Card, List } from 'antd';
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

export const RankingList = () => {
  const [rankingListStreets, loadRankingListData] = useRankingListStreets();

  React.useEffect(() => {
    setTimeout(loadRankingListData, 500);
  }, []);

  return (
    <Card className="MostCrowdedBoard" title={strings.title} bordered={false}>
      <List
        footer={<div>Footer</div>}
        bordered
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
      <span className="street-name">{`${name}`}</span>
      &nbsp;
      <span>{`${carFlow}/${humanFlow}`}</span>
    </List.Item>
  );
};
