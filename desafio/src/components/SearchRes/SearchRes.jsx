import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

import stylesHome from "../Home/styles.module.css"
import styles from "./styles.module.css"

function SearchRes() {
    const { questAnimesRes, removeAnimeToFav } = useContext(GlobalContext)

    return (
        <>
            <div className={styles.previousButtonContainer}>
                <button type="button">
                    <img src="/images/arrow.svg" alt="Voltar" />
                </button>
            </div>

            <h2>Resultados da busca</h2>
            <section className={stylesHome.remainingEpisodes}>
                {questAnimesRes.map(anime => {
                    return (
                        <div key={anime.mal_id} className={stylesHome.resEpisode}>
                            <img src={anime.image_url} alt="Capa" />
                            <div className={stylesHome.legend}>
                                <button type="button" onClick={() => removeAnimeToFav(anime.mal_id)}>Remover</button>
                                <strong>{anime.title}</strong>
                                <span>{anime.start_date ? `Data de lançamento: ${anime.start_date}` : ''}</span>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default SearchRes