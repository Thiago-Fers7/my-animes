import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

import stylesHome from "../Home/styles.module.css"
import styles from "./styles.module.css"

function AllAnimes() {
    const { addAnimeToFav, allAnimes, amountPage, pageSelect, page } = useContext(GlobalContext)

    function previousPage() {
        if (page === 1) {
            return
        } else {
            pageSelect(page - 1)
        }
    }

    function nextPage() {
        if (page === 20) {
            return
        } else {
            pageSelect(page + 1)
        }
    }

    function test(index, pageCurrent) {
        console.log(index + '\n' + pageCurrent)
    }

    return (
        <>
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
                    <img src="/images/left.svg" alt="Voltar" onClick={previousPage} />
                    {amountPage.map((thisPage, index) =>
                        <span
                            onClick={() => pageSelect(index + 1)}
                            className={index + 1 === page ? styles.thisPage : ''}
                            key={thisPage}
                            onLoad={() => test(index)}
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