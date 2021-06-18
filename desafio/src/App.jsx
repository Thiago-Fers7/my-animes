import Header from './components/Header/Header'

import styles from './styles/app.module.css'
import './styles/global.css'

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
    </div>
  )
}

export default App
