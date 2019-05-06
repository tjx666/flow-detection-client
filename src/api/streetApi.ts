import { Street, StreetCamera } from '../models/Street';
import _ from 'lodash';

export const streetsVideosAddress = [
    require('../assets/videos/1.mp4'),
    require('../assets/videos/2.mp4'),
    require('../assets/videos/3.mp4'),
    require('../assets/videos/4.mp4'),
    require('../assets/videos/5.mp4'),
    require('../assets/videos/6.mp4'),
    require('../assets/videos/7.mp4'),
    require('../assets/videos/8.mp4'),
    require('../assets/videos/9.mp4'),
];

interface FakerStreetItem {
    name: string;
    x: number;
    y: number;
}

const streetNames: FakerStreetItem[] = [
    {
        name: '紫阳大道',
        x: 30,
        y: 300,
    },
    {
        name: '福州路',
        x: 140,
        y: 100,
    },
    {
        name: '江科后街',
        x: 200,
        y: 60,
    },
    {
        name: '天虹十字路口',
        x: 500,
        y: 30,
    },
    {
        name: '八月湖街道',
        x: 500,
        y: 500,
    },
    {
        name: '百花洲街道',
        x: 580,
        y: 450,
    },
    {
        name: '沙井街道',
        x: 30,
        y: 200,
    },
    {
        name: '桃园街道',
        x: 500,
        y: 380,
    },
    {
        name: '青山路街道',
        x: 580,
        y: 540,
    },
    {
        name: '上海路街道',
        x: 100,
        y: 320,
    },
    {
        name: '京山街道',
        x: 550,
        y: 320,
    },
    {
        name: '三家店街道',
        x: 120,
        y: 270,
    },
    {
        name: '塘山街道',
        x: 420,
        y: 560,
    },
    {
        name: '广润街道',
        x: 188,
        y: 160,
    },
    {
        name: '上海路街道',
        x: 400,
        y: 200,
    },
];

export const getStreets = async (): Promise<Street[]> => {
    return streetNames.map<Street>(({ name, x, y }) => {
        const randomCameraCount = _.random(1, 4);
        return {
            name,
            cameras: [...Array(randomCameraCount).keys()].map<StreetCamera>(arrayIndex => {
                return {
                    serialNumber: arrayIndex + 1,
                    carFlow: _.random(1, 10),
                    humanFlow: _.random(2, 30),
                    videoAddress: streetsVideosAddress[_.random(0, 8)],
                };
            }),
            x,
            y,
        };
    });
};
