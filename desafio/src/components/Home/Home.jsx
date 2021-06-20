import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { api } from '../../services/api'

import styles from './styles.module.css'

function Home() {
    const { handleAnimes, addAnimeToFav, favorites } = useContext(GlobalContext)

    const [homeEpisodesTop, setHomeEpisodesTop] = useState([])
    const [homeEpisodesTopRes, setHomeEpisodesRes] = useState([])
    const [isEpisode, setIsEpisode] = useState(false)

    useEffect(() => {
        api.get('top/anime/1/upcoming')
            .then(({ data }) => {
                const topMostRated = data.top.slice(0, 10)
                const moreEpisodes = data.top.slice(10, 20)

                setHomeEpisodesTop(topMostRated)
                setHomeEpisodesRes(moreEpisodes)

                setIsEpisode(true)
            })
            .catch(error => {
                setIsEpisode(false)
            })
    }, [])

    return (
        <>
            {isEpisode && (
                <>
                    <h2>Populares</h2>
                    <section className={styles.episodeContainer}>
                        {homeEpisodesTop.map(episode => {
                            return (
                                <div key={episode.mal_id} className={styles.popularEpisode}>
                                    <img src={episode.image_url} className={favorites.indexOf(episode.mal_id) !== -1 ? styles.isFavAdded : ''} alt="Capa" />
                                    <div className={styles.legend}>
                                        <button type="button" onClick={() => addAnimeToFav(episode.mal_id)}>Adiconar</button>
                                        <strong>{episode.title}</strong>
                                        <span>{episode.start_date ? `Data de lançamento: ${episode.start_date}` : ''}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </section>

                    <h2>Mais Animes</h2>

                    <section className={styles.remainingEpisodes}>
                        {homeEpisodesTopRes.map(episode => {
                            return (
                                <div key={episode.mal_id} className={styles.resEpisode}>
                                    <img src={episode.image_url} className={favorites.indexOf(episode.mal_id) !== -1 ? styles.isFavAdded : ''} alt="Capa" />
                                    <div className={styles.legend}>
                                        <button type="button" onClick={() => addAnimeToFav(episode.mal_id)}>Adiconar</button>
                                        <strong>{episode.title}</strong>
                                        <span>{episode.start_date ? `Data de lançamento: ${episode.start_date}` : ''}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                </>
            )}


            <footer className={styles.footerContainer}>
                <button type="button" onClick={handleAnimes}>ver mais</button>
            </footer>
        </>
    )
}

export default Home