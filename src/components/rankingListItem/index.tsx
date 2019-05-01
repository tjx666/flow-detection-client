import * as React from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { List } from 'antd';
import { Street } from '../../models/Street';
import './style.scss';

interface RankListItemProps {
    rank: number;
    street: Street;
    isSelected?: boolean;
}

export const RankListItem = React.memo(
    ({ rank, street, isSelected }: RankListItemProps) => {
        const { name, cameras } = street;
        const averageCarFlow = _.mean(cameras.map(camera => camera.carFlow));
        const averageHumanFlow = _.mean(
            cameras.map(camera => camera.humanFlow)
        );

        return (
            <List.Item
                className={classNames('ranklist-item', {
                    'ranklist-item-selected': isSelected,
                    'ranklist-item-most-crowded': rank <= 3,
                })}
            >
                <span className="rank">{`${rank}.`}</span>
                <span className="street-name">{`${name}`}</span>
                <span className="rate">
                    <span className="car-flow">{averageCarFlow}</span>
                    &nbsp;/&nbsp;
                    <span className="human-flow">{averageHumanFlow}</span>
                </span>
            </List.Item>
        );
    }
);
