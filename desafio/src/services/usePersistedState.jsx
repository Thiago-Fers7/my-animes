import { useState } from "react";

function usePersistedState(initialState) {
    console.log(initialState)

    const key = 'favortes'

    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })

    localStorage.setItem(key, JSON.stringify(state))

    return [state, setState]
}

export default usePersistedState