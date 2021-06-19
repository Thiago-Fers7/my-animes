import { useEffect, useState } from 'react'
import { api } from '../../services/api'

function Home() {
    const [homeEpisodes, setHomeEpisodes] = useState([])
    const [isEpisode, setIsEpisode] = useState(false)

    useEffect(() => {
        api.get('top/anime/1/upcoming')
            .then(({ data }) => {
                setHomeEpisodes(data.top)
                setIsEpisode(true)
            })
            .catch(error => {
                setIsEpisode(false)
            })
    }, [])

    return (
        <section>
            {isEpisode && (
                homeEpisodes.map(episode => {
                    return (
                        <div key={episode.mal_id}>
                            <img src={episode.image_url} alt="Capa" />
                            <div>
                                <button type="button">X</button>
                                <strong>{episode.title}</strong>
                                <span>Data de lançamento: {episode.start_date}</span>
                            </div>
                        </div>
                    )
                })
            )}
        </section>
    )
}

export default Home