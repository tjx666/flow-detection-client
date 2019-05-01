import * as React from 'react';
import classNames from 'classnames';
import { List, Icon } from 'antd';
import { Street } from '../../models/Street';
import './style.scss';

interface RankListItemProps {
    rank: number;
    street: Street;
    isSelected?: boolean;
}

export const RankListItem = React.memo(
    ({ rank, street, isSelected }: RankListItemProps) => {
        const { name, carFlow, humanFlow } = street;

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
                    <span className="car-flow">{carFlow}</span>&nbsp;/&nbsp;
                    <span className="human-flow">{humanFlow}</span>
                </span>
            </List.Item>
        );
    }
);
