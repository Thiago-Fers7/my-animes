import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { api } from "../../services/api"

import stylesHome from "../Home/styles.module.css"
import styles from "./styles.module.css"

function AllAnimes() {
    const { isAnimes, addAnimeToFav, favorites } = useContext(GlobalContext)

    const [allAnimes, setAllAnimes] = useState([])
    const [amountPage, setAmountPage] = useState([])

    function allPages(amount) {
        let pages = []
        for (let i = 1; i <= amount; i++) {
            pages.push(i)
        }

        setAmountPage(pages)
    }

    useEffect(() => {
        api.get('search/anime?q=&order_by=members&sort=desc&page=1')
            .then(({ data }) => {
                setAllAnimes(data.results)
                allPages(data.last_page)
            })
    }, [])

    return (
        <>
            {isAnimes && (
                <>
                    <h2>Todos Animes</h2>
                    <section className={stylesHome.remainingEpisodes}>
                        {allAnimes.map(anime => {
                            return (
                                <div key={anime.mal_id} className={stylesHome.resEpisode}>
                                    <img src={anime.image_url} alt="Capa" className={favorites.indexOf(anime.mal_id) !== -1 ? stylesHome.isFavAdded : ''} />
                                    <div className={stylesHome.legend}>
                                        <button type="button" onClick={() => addAnimeToFav(anime.mal_id)}>Adiconar</button>
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
                            {amountPage.map(page => <span className={styles.pagesNumber} key={page}>{page}</span>)}
                            <img src="/images/left.svg" alt="Avançar" />
                        </div>
                    </footer>
                </>
            )}
        </>
    )
}

export default AllAnimes