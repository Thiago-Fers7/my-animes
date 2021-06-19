import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import styles from './styles.module.css';

function Header() {
    const { isHome, isAnimes, isFav, handleAnimes, handleHome, handleFav } = useContext(GlobalContext)

    return (
        <header className={styles.headerContainer}>
            <nav>
                <strong>Meus animes</strong>
                <ul>
                    <li
                        className={isHome ? styles.isActive : ''}
                        onClick={handleHome}
                    >
                        Início
                    </li>

                    <li
                        className={isAnimes ? styles.isActive : ''}
                        onClick={handleAnimes}
                    >
                        Animes
                    </li>

                    <li
                        className={isFav ? styles.isActive : ''}
                        onClick={handleFav}
                    >
                        Favoritos
                    </li>
                </ul>

                <form className={styles.formContainer}>
                    <input type="text" />

                    <button type="button" className={styles.active}>
                        <img src="/images/search.svg" alt="Pesquisa" />
                    </button>
                </form>
            </nav>
        </header>
    )
}

export default Header