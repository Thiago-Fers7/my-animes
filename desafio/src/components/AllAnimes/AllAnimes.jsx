import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

import stylesHome from "../Home/styles.module.css"
import styles from "./styles.module.css"

function AllAnimes() {
    const { addAnimeToFav, allAnimes, amountPage, pageSelect, isSearching } = useContext(GlobalContext)

    return (
        <>
            {isSearching && (
                <div className="loader" />
            )}
            <h2>Todos Animes</h2>
            <section className={stylesHome.remainingEpisodes}>
                {allAnimes.map(anime => {
                    return (
                        <div key={anime.mal_id} className={stylesHome.resEpisode}>
                            <img src={anime.image_url} alt="Capa" />
                            <div className={stylesHome.legend}>
                                <button type="button" onClick={() => addAnimeToFav(anime)}>Adiconar</button>
                                <strong>{anime.title}</strong>
                                <span>{anime.start_date ? `Data de lançamento: ${anime.start_date}` : ''}</span>
                            </div>
                        </div>
                    )
                })}
            </section>

            <footer className={stylesHome.footerContainer}>
                <div className={styles.pagesContainer}>
                    <img src="/images/left.svg" alt="Voltar" />
                    {amountPage.map((page, index) => <span onClick={() => pageSelect(index + 1)} className={styles.pagesNumber} key={page}>{page}</span>)}
                    <img src="/images/left.svg" alt="Avançar" />
                </div>
            </footer>
        </>
    )
}

export default AllAnimes