import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function GlobalContextProvider({ children }) {
    const [isHome, setIsHome] = useState(true)
    const [isAnimes, setIsAnimes] = useState(false)
    const [isFav, setIsFav] = useState(false)
    const [favorites, setFavorites] = useState([])

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

    function addAnimeToFav(id) {
        if (favorites.indexOf(id) === -1) {
            let ids = favorites
            ids.push(id)
            console.log(ids)
            setFavorites(ids)
        }
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
            favorites
        }}>
            {children}
        </GlobalContext.Provider>
    )
}