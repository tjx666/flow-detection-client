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

export const RankListItem = ({ street, isSelected }: RankListItemProps) => {
    const { name, carFlow, humanFlow } = street

    return (
        <List.Item
            className={classnames('ranklist-item', {
                'selected-item': isSelected,
            })}
        >
            <Icon type="flag" className="flag-icon" />
            <span className="rank">{`${name}`}</span>
            <span className="rate">{`${carFlow} / ${humanFlow}`}</span>
        </List.Item>
    )
}
