import { createContext, useState } from 'react'

export const GlobalContext = createContext({})

export function GlobalContextProvider({ children }) {
    const [isHome, setIsHome] = useState(true)
    const [isAnimes, setIsAnimes] = useState(false)
    const [isFav, setIsFav] = useState(false)

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

    return (
        <GlobalContext.Provider value={{
            isHome,
            isAnimes,
            isFav,
            handleFav,
            handleAnimes,
            handleHome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}