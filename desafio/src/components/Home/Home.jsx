import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import styles from './styles.module.css'

function Home() {
    const [homeEpisodes, setHomeEpisodes] = useState([])
    const [isEpisode, setIsEpisode] = useState(false)

    useEffect(() => {
        api.get('top/anime/1/upcoming')
            .then(({ data }) => {
                const topMostRated = data.top.slice(0, 15)
                
                setHomeEpisodes(topMostRated)
                setIsEpisode(true)
            })
            .catch(error => {
                setIsEpisode(false)
            })
    }, [])

    return (
        <section className={styles.episodeContainer}>
            {isEpisode && (
                homeEpisodes.map(episode => {
                    return (
                        <div key={episode.mal_id} className={styles.episode}>
                            <img src={episode.image_url} alt="Capa" />
                            <div className={styles.legend}>
                                <button type="button">Adiconar</button>
                                <strong>{episode.title}</strong>
                                <span>{episode.start_date ? `Data de lançamento: ${episode.start_date}` : ''}</span>
                            </div>
                        </div>
                    )
                })
            )}
        </section>
    )
}

export default Home