import { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import styles from './styles.module.css';

function Header() {
    const { isHome, isAnimes, isFav, handleAnimes, handleHome, handleFav, searchResult, exitSearchMode } = useContext(GlobalContext)

    const [valueInput, setValueInput] = useState('')

    function capValue(e) {
        const inputValue = e.target.value

        if (inputValue === '') {
            exitSearchMode()
        } else {
            setValueInput(inputValue)
        }
    }

    return (
        <header className={styles.headerContainer}>
            <nav>
                <strong id="Logo">Meus animes</strong>
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
                    <input
                        type="search"
                        onChange={capValue}
                        placeholder="Buscar anime"
                    />

                    <button
                        type="button"
                        className={styles.active}
                        onClick={() => searchResult(valueInput)}
                    >
                        <img src="/images/search.svg" alt="Pesquisa" />
                    </button>
                </form>
            </nav>
        </header>
    )
}

export default Header