import Header from './components/Header/Header'
import Home from './components/Home/Home'

import styles from './styles/app.module.css'
import './styles/global.css'

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />

      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
