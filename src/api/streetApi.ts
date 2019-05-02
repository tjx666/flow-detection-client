import { Street, StreetCamera } from '../models/Street';
import _ from 'lodash';

const streetVideosAddress = [''];

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
];

export const getRankingList = async (): Promise<Street[]> => {
    return streetNames.map<Street>(name => {
        const randomCameraCount = _.random(1, 4);
        return {
            name,
            cameras: [...Array(randomCameraCount).keys()].map<StreetCamera>(arrayIndex => {
                return {
                    serialNumber: arrayIndex + 1,
                    carFlow: _.random(1, 10),
                    humanFlow: _.random(2, 30),
                    videoAddress: '',
                };
            }),
        };
    });
};
