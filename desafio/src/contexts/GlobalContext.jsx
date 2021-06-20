import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const GlobalContext = createContext({})

export function GlobalContextProvider({ children }) {
    const [isHome, setIsHome] = useState(true)
    const [isAnimes, setIsAnimes] = useState(false)
    const [isFav, setIsFav] = useState(false)

    const [isQuest, setIsQuest] = useState(false)
    const [questAnimesRes, setQuestAnimesRes] = useState([])

    const [favorites, setFavorites] = useState([])

    const [allAnimes, setAllAnimes] = useState([])
    const [amountPage, setAmountPage] = useState([])

    const [homeEpisodesTop, setHomeEpisodesTop] = useState([])
    const [homeEpisodesTopRes, setHomeEpisodesRes] = useState([])
    const [isEpisode, setIsEpisode] = useState(false)

    const [isSearching, setIsSearching] = useState(false)

    const [page, setPage] = useState(1)

    async function searchResult(keyWord) {
        setIsQuest(true)
        setIsSearching(true)

        await api.get(`search/anime?q=${keyWord}&page=1`)
            .then(({ data }) => {
                setQuestAnimesRes(data.results)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsSearching(false)
            })
    }

    function pageSelect(currentPage) {
        setPage(currentPage)
    }

    useEffect(() => {
        setIsSearching(true)
        api.get(`search/anime?q=&order_by=members&sort=desc&page=${page}`)
            .then(({ data }) => {
                setAllAnimes(data.results)
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

    useEffect(() => {
        let pages = []
        for (let i = 1; i <= 20; i++) {
            pages.push(i)
        }

        setAmountPage(pages)
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
            isSearching,
            page,
            isQuest,
            searchResult,
            questAnimesRes
        }}>
            {children}
        </GlobalContext.Provider>
    )
}