import * as React from 'react'
import { Map } from '../../components'
import { RankingList, Monitor } from '../../components'
import { Street } from '../../models/Street'
import { getRankingListData } from '../../api/streetApi'
import './style.scss'

export const Home = () => {
    const [streetsList, setStreetList] = React.useState<Street[]>([])

    React.useEffect(() => {
        setTimeout(async () => {
            setStreetList(await getRankingListData())
        }, 500)
    })

    return (
        <main className="home">
            <RankingList streets={streetsList} />
            <Map />
            <Monitor videoLink="http://www.w3school.com.cn/i/movie.ogg" />
        </main>
    )
}
