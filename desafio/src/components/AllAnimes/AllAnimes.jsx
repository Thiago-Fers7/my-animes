import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { api } from "../../services/api"

import styles from "../Home/styles.module.css"

function AllAnimes() {
    const { isAnimes } = useContext(GlobalContext)

    const [allAnimes, setAllAnimes] = useState([])
    const [amountPage, setAmountPage] = useState([])

    function allPages(amount) {
        let pages = []
        for (let i = 1; i <= amount; i++) {
            pages.push(i)
        }

        console.log(pages)
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
            <h2>Todos Animes</h2>
            {isAnimes && (
                <>
                    <section className={styles.remainingEpisodes}>
                        {allAnimes.map(anime => {
                            return (
                                <div key={anime.mal_id} className={styles.resEpisode}>
                                    <img src={anime.image_url} alt="Capa" />
                                    <div className={styles.legend}>
                                        <button type="button">Adiconar</button>
                                        <strong>{anime.title}</strong>
                                        <span>{anime.start_date ? `Data de lançamento: ${anime.start_date}` : ''}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </section>

                    <footer className={styles.footerContainer}>
                        <div>
                            {amountPage.map(page => <span key={page}>{page}</span>)}
                        </div>
                    </footer>
                </>
            )}
        </>
    )
}

export default AllAnimes