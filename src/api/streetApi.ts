import { Street } from '../models/Street'
import _ from 'lodash'
// import Faker from 'faker';

const streetNames = [
    '紫阳大道',
    '福州路',
    '江科后街',
    '天虹十字路口',
    '八月湖街道',
    '百花洲街道',
    '沙井街道',
    '桃园街道',
    '青山路街道',
    '上海路街道',
    '京山街道',
    '三家店街道',
    '塘山街道',
    '广润街道',
    '上海路街道',
]

export const getRankingListData = async (): Promise<Street[]> => {
    return streetNames.map(name => {
        const carFlow = _.random(2, 10)
        return {
            name,
            carFlow,
            humanFlow: carFlow * (Math.random() < 0.5 ? 5 : 4),
        }
    })
}
