import { Street, StreetCamera } from '../models/Street';
import _ from 'lodash';

const streetVideosAddress = [''];

interface FakerStreetItem {
    name: string;
    x: number;
    y: number;
}

const streetNames: FakerStreetItem[] = [
    {
        name: '紫阳大道',
        x: 300,
        y: 380,
    },
    {
        name: '福州路',
        x: 80,
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
        x: 300,
        y: 500,
    },
    {
        name: '百花洲街道',
        x: 400,
        y: 430,
    },
    {
        name: '沙井街道',
        x: 50,
        y: 480,
    },
    {
        name: '桃园街道',
        x: 40,
        y: 400,
    },
    {
        name: '青山路街道',
        x: 580,
        y: 540,
    },
    {
        name: '上海路街道',
        x: 100,
        y: 360,
    },
    {
        name: '京山街道',
        x: 250,
        y: 380,
    },
    {
        name: '三家店街道',
        x: 120,
        y: 270,
    },
    {
        name: '塘山街道',
        x: 480,
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
                    videoAddress: '',
                };
            }),
            x,
            y,
        };
    });
};
