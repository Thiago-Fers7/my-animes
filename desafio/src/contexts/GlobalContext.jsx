import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const GlobalContext = createContext({})

export function GlobalContextProvider({ children }) {
    const [isHome, setIsHome] = useState(true)
    const [isAnimes, setIsAnimes] = useState(false)
    const [isFav, setIsFav] = useState(false)
    const [favorites, setFavorites] = useState([])

    const [allAnimes, setAllAnimes] = useState([])
    const [amountPage, setAmountPage] = useState([])

    const [homeEpisodesTop, setHomeEpisodesTop] = useState([])
    const [homeEpisodesTopRes, setHomeEpisodesRes] = useState([])
    const [isEpisode, setIsEpisode] = useState(false)

    useEffect(() => {
        function allPages(amount) {
            let pages = []
            for (let i = 1; i <= amount; i++) {
                pages.push(i)
            }

            setAmountPage(pages)
        }


        api.get('search/anime?q=&order_by=members&sort=desc&page=1')
            .then(({ data }) => {
                setAllAnimes(data.results)
                allPages(data.last_page)
            })
    }, [])



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

    function handleHome() {
        setIsFav(false)
        setIsHome(true)
        setIsAnimes(false)
    }

    function handleAnimes() {
        setIsFav(false)
        setIsHome(false)
        setIsAnimes(true)
    }

    function handleFav() {
        setIsFav(true)
        setIsHome(false)
        setIsAnimes(false)
    }

    function addAnimeToFav(anime) {
        if (favorites.indexOf(anime) === -1) {
            let AllAnimes = favorites

            AllAnimes.unshift(anime)

            setFavorites(AllAnimes)
        }
    }

    function removeAnimeToFav(id) {

    }

    return (
        <GlobalContext.Provider value={{
            isHome,
            isAnimes,
            isFav,
            handleFav,
            handleAnimes,
            handleHome,
            addAnimeToFav,
            removeAnimeToFav,
            favorites,
            allAnimes,
            amountPage,
            homeEpisodesTop,
            homeEpisodesTopRes,
            isEpisode

        }}>
            {children}
        </GlobalContext.Provider>
    )
}