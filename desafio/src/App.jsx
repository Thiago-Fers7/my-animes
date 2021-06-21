import { useContext } from 'react'
import { GlobalContext } from './contexts/GlobalContext'
import AllAnimes from './components/AllAnimes/AllAnimes'
import Favorites from './components/Favorites/Favorites'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import SearchRes from './components/SearchRes/SearchRes'

import styles from './styles/app.module.css'
import './styles/global.css'

function App() {
  const {
    isHome,
    isAnimes,
    isFav,
    isQuest,
    isSearching
  } = useContext(GlobalContext)

  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        {isQuest ? <SearchRes /> : (
          <>
            {isHome ? <Home /> : ''}
            {isAnimes ? <AllAnimes /> : ''}
            {isFav ? <Favorites /> : ''}
          </>
        )}
      </main>

      {/* Load animation */}
      {isSearching && (
        <div className="loader" />
      )}
    </div>
  )
}

export default App
