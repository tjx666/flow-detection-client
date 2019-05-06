import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { RankingList, Map } from '../../../components';
import './style.scss';

export const Home = React.memo(() => {
    return (
        <main className="home">
            <RankingList onSelectStreet={() => {}} />
            <div className="map-container">
                <Map />
                <Link to="/recommend">
                    <Button className="check-recommend" size="default" type="primary">
                        查看推荐路线→
                    </Button>
                </Link>
            </div>
        </main>
    );
});
