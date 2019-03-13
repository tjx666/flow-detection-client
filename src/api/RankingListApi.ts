import { Street } from '../models/Street';
// import Faker from 'faker';

export const getRankingListData = async (): Promise<Street[]> => {
  return [
    {
      name: '1',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '2',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '3',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '4',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '5',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '6',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '7',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '8',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '9',
      carFlow: 10,
      humanFlow: 20
    },
    {
      name: '10',
      carFlow: 10,
      humanFlow: 20
    }
  ];
};
