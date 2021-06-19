import { createContext } from 'react'


export const HomeContext = createContext({})

export function HomeContextProvider({ children }) {


    return (
        <HomeContext.Provider value={{

        }}>
            {children}
        </HomeContext.Provider>
    )
}