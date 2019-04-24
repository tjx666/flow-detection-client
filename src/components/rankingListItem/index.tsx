import * as React from 'react'
import classnames from 'classnames'
import { List, Icon } from 'antd'
import { Street } from '../../models/Street'
import './style.scss'

interface RankListItemProps {
    rank: number
    street: Street
    isSelected?: boolean
}

export const RankListItem = ({
    rank,
    street,
    isSelected,
}: RankListItemProps) => {
    const { name, carFlow, humanFlow } = street

    return (
        <List.Item
            className={classnames('ranklist-item', {
                'ranklist-item-selected': isSelected,
            })}
        >
            {(rank <= 3 && (
                <Icon type="fire" className="ranklist-item-icon" />
            )) || (
                <>
                    <em>{`${rank}.`}</em>&nbsp;
                </>
            )}
            <span className="rank">{`${name}`}</span>
            <span className="rate">{`${carFlow} / ${humanFlow}`}</span>
        </List.Item>
    )
}
