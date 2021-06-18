import Header from './components/Header/Header'
import Home from './components/Home/Home'
import { HomeContextProvider } from './contexts/HomeContext'

import styles from './styles/app.module.css'
import './styles/global.css'

function App() {
  return (
    <HomeContextProvider>
      <div className={styles.appContainer}>
        <Header />
        <main>
          <Home />
        </main>
      </div>
    </HomeContextProvider>
  )
}

export default App
