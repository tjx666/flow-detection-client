import * as React from 'react'
import { Map } from '../../containers'
import { RankingList, Monitor } from '../../components'
import { Street } from '../../models/Street'
import { getRankingListData } from '../../api/streetApi'

import './Home.scss'

export const Home = () => {
    const [streetsList, setStreetList] = React.useState<Street[]>([])

    React.useEffect(() => {
        setTimeout(async () => {
            setStreetList(await getRankingListData())
        }, 500)
    }, [])

    return (
        <main className="home">
            <RankingList listData={streetsList} />
            <Map />
            <Monitor videoLink="http://www.w3school.com.cn/i/movie.ogg" />
        </main>
    )
}
