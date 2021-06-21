import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

import stylesHome from "../Home/styles.module.css"
import styles from "./styles.module.css"

function SearchRes() {
    const { questAnimesRes, addAnimeToFav, exitSearchMode, formatDate, favorites, auxNumber } = useContext(GlobalContext)

    return (
        <>
            <div className={styles.previousButtonContainer}>
                <button type="button" onClick={exitSearchMode}>
                    <img src="/images/arrow.svg" alt="Voltar" />
                </button>
            </div>

            <h2>Resultados da busca</h2>
            <section className={stylesHome.remainingEpisodes}>
                {questAnimesRes.map(anime => {
                    const date = formatDate(anime.start_date)

                    return (
                        <div key={anime.mal_id} className={stylesHome.resEpisode}>
                            <img src={anime.image_url} alt="Capa" className={favorites.indexOf(anime) !== -1 && typeof auxNumber === 'number' ? stylesHome.favAdd : ''}/>
                            <div className={stylesHome.legend}>
                                <button type="button" onClick={() => addAnimeToFav(anime)}>Adicionar</button>
                                <strong>{anime.title}</strong>
                                <span>{anime.start_date ? `Lançamento: ${date}` : ''}</span>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default SearchRes