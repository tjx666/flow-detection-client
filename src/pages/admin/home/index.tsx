import * as React from 'react';
import { Map } from '../../../components';
import { RankingList, Monitor } from '../../../components';
import './style.scss';
import { Street } from '../../../models/Street';

export const Home = React.memo(() => {
    const defaultObservingStreet: Street = {
        name: '紫阳大道',
        cameras: [
            {
                serialNumber: 1,
                carFlow: 0,
                humanFlow: 0,
                videoAddress: 'http://www.w3school.com.cn/i/movie.ogg',
            },
        ],
        x: 0,
        y: 0,
    };
    const [observingStreet, setObservingStreet] = React.useState<Street>(defaultObservingStreet);

    const handleSelectStreet = React.useCallback(
        (street: Street) => {
            console.log({ street });
            setObservingStreet(street);
        },
        [observingStreet],
    );

    return (
        <main className="admin-home">
            <RankingList onSelectStreet={handleSelectStreet} />
            <Map />
            <Monitor street={observingStreet} />
        </main>
    );
});
