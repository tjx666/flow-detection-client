import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Map } from '../../../components';
import './style.scss';

export const Home = React.memo(() => {
    return (
        <main className="home">
            <Map />
            <Link to="/recommend">
                <Button className="check-recommend" size="default" type="primary">
                    查看推荐路线
                </Button>
            </Link>
        </main>
    );
});
