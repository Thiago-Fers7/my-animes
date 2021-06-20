import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

import styles from './styles.module.css'

function Home() {
    const { handleAnimes, addAnimeToFav, homeEpisodesTop, homeEpisodesTopRes } = useContext(GlobalContext)

    return (
        <>
            <h2>Populares</h2>
            <section className={styles.episodeContainer}>
                {homeEpisodesTop.map(episode => {
                    return (
                        <div key={episode.mal_id} className={styles.popularEpisode}>
                            <img src={episode.image_url} alt="Capa" />
                            <div className={styles.legend}>
                                <button type="button" onClick={() => addAnimeToFav(episode)}>Adiconar</button>
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
                            <img src={episode.image_url} alt="Capa" />
                            <div className={styles.legend}>
                                <button type="button" onClick={() => addAnimeToFav(episode)}>Adiconar</button>
                                <strong>{episode.title}</strong>
                                <span>{episode.start_date ? `Data de lançamento: ${episode.start_date}` : ''}</span>
                            </div>
                        </div>
                    )
                })}
            </section>

            <footer className={styles.footerContainer}>
                <button type="button" onClick={handleAnimes}>ver mais</button>
            </footer>
        </>
    )
}

export default Home