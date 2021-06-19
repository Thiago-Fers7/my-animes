import { useContext } from 'react'
import AllAnimes from './components/AllAnimes/AllAnimes'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { GlobalContext } from './contexts/GlobalContext'

import styles from './styles/app.module.css'
import './styles/global.css'

function App() {
  const { isHome, isAnimes, isFav } = useContext(GlobalContext)

  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        {isHome ? <Home /> : ''}
        {isAnimes ? <AllAnimes /> : ''}
      </main>
    </div>
  )
}

export default App
