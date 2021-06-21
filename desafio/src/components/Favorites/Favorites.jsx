import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

import stylesHome from "../Home/styles.module.css"

function Favorites() {
    const { favorites, removeAnimeToFav, formatDate } = useContext(GlobalContext)

    return (
        <>
            <h2>Meus Favoritos</h2>
            <section className={stylesHome.remainingEpisodes}>
                {favorites.map(anime => {
                    const date = formatDate(anime.start_date)
                    
                    return (
                        <div key={anime.mal_id} className={stylesHome.resEpisode}>
                            <img src={anime.image_url} alt="Capa" className={stylesHome.favAdd}/>
                            <div className={stylesHome.legend}>
                                <button type="button" onClick={() => removeAnimeToFav(anime.mal_id)}>Remover</button>
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

export default Favorites