import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

import stylesHome from "../Home/styles.module.css"
import styles from "./styles.module.css"

function AllAnimes() {
    const { addAnimeToFav, allAnimes, amountPage, pageSelect, page, formatDate } = useContext(GlobalContext)

    function previousPage() {
        if (page === 1) {
            return
        } else {
            window.scrollTo(0, 0)
            pageSelect(page - 1)
        }
    }

    function nextPage() {
        if (page === 20) {
            return
        } else {
            window.scrollTo(0, 0)
            pageSelect(page + 1)
        }
    }

    return (
        <>
            <h2>Todos Animes</h2>
            <section className={stylesHome.remainingEpisodes}>
                {allAnimes.map(anime => {
                    const date = formatDate(anime.start_date)
                    
                    return (
                        <div key={anime.mal_id} className={stylesHome.resEpisode}>
                            <img src={anime.image_url} alt="Capa" />
                            <div className={stylesHome.legend}>
                                <button type="button" onClick={() => addAnimeToFav(anime)}>Adiconar</button>
                                <strong>{anime.title}</strong>
                                <span>{anime.start_date ? `Lançamento: ${date}` : ''}</span>
                            </div>
                        </div>
                    )
                })}
            </section>

            <footer className={stylesHome.footerContainer}>
                <div className={styles.pagesContainer}>
                    <img src="/images/left.svg" alt="Voltar" onClick={previousPage} />
                    {amountPage.map((thisPage, index) =>
                        <span
                            onClick={() => pageSelect(index + 1)}
                            className={index + 1 === page ? styles.thisPage : ''}
                            key={thisPage}
                        >
                            {thisPage}
                        </span>
                    )}
                    <img src="/images/left.svg" alt="Avançar" onClick={nextPage} />
                </div>
            </footer>
        </>
    )
}

export default AllAnimes