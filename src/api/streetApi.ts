import { Street } from '../models/Street'
// import Faker from 'faker';

export const getRankingListData = async (): Promise<Street[]> => {
    return [
        {
            name: '1',
            carFlow: 6,
            humanFlow: 36,
        },
        {
            name: '2',
            carFlow: 5,
            humanFlow: 28,
        },
        {
            name: '3',
            carFlow: 5,
            humanFlow: 27,
        },
        {
            name: '4',
            carFlow: 6,
            humanFlow: 18,
        },
        {
            name: '5',
            carFlow: 6,
            humanFlow: 20,
        },
        {
            name: '6',
            carFlow: 5,
            humanFlow: 20,
        },
        {
            name: '7',
            carFlow: 5,
            humanFlow: 16,
        },
        {
            name: '8',
            carFlow: 4,
            humanFlow: 10,
        },
        {
            name: '9',
            carFlow: 4,
            humanFlow: 8,
        },
        {
            name: '10',
            carFlow: 2,
            humanFlow: 8,
        },
    ]
}
