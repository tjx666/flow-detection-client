import * as React from 'react';
import './style.scss';

export const Detail = React.memo(() => {
    return (
        <main className="detail">
            <img src={require('../../assets/images/detail.png')} />
        </main>
    );
});
