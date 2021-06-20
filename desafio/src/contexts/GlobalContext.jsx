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

    const [isSearching, setIsSearching] = useState(false)

    const [page, setPage] = useState(1)

    function allPages(amount) {
        let pages = []
        for (let i = 1; i <= amount; i++) {
            pages.push(i)
        }

        setAmountPage(pages)
    }

    function pageSelect(currentPage) {
        setPage(currentPage)
    }

    useEffect(() => {
        setIsSearching(true)
        api.get(`search/anime?q=&order_by=members&sort=desc&page=${page}`)
            .then(({ data }) => {
                setAllAnimes(data.results)
                allPages(data.last_page)
            })
            .finally(() => {
                setIsSearching(false)
            })
    }, [page])

    useEffect(() => {
        api.get('top/anime/1/upcoming')
            .then(({ data }) => {
                const topMostRated = data.top.slice(0, 10)
                const moreEpisodes = data.top.slice(10, 20)

                setHomeEpisodesTop(topMostRated)
                setHomeEpisodesRes(moreEpisodes)
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
            isEpisode,
            pageSelect,
            isSearching
        }}>
            {children}
        </GlobalContext.Provider>
    )
}