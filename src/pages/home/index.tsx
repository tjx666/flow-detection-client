import * as React from 'react';
import { Map } from '../../components';
import { RankingList, Monitor } from '../../components';
import './style.scss';

export const Home = React.memo(() => {
    return (
        <main className="home">
            <RankingList />
            <Map />
            <Monitor videoLink="http://www.w3school.com.cn/i/movie.ogg" />
        </main>
    );
});
