import { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import styles from './styles.module.css';

function Header() {
    const { isHome, isAnimes, isFav, handleAnimes, handleHome, handleFav, searchResult, exitSearchMode, IsIconFav } = useContext(GlobalContext)

    const [valueInput, setValueInput] = useState('')
    const [isActive, setIsActive] = useState(false)

    function capValue(e) {
        const inputValue = e.target.value

        if (inputValue === '') {
            exitSearchMode()
        } else {
            setValueInput(inputValue)
        }
    }

    function active(aux) {
        setIsActive(!isActive)
        
        if (!aux) {
            setIsActive(aux)
        }
    }

    return (
        <header className={styles.headerContainer}>
            <nav>
                <strong>Meus animes</strong>
                <ul className={isActive ? styles.active : ''}>
                    <li
                        className={isHome ? styles.isActive : ''}
                        onClick={() => { handleHome(); active(false) }}
                    >
                        Início
                    </li>

                    <li
                        className={isAnimes ? styles.isActive : ''}
                        onClick={() => { handleAnimes(); active(false) }}
                    >
                        Animes
                    </li>

                    <li
                        className={`${isFav ? styles.isActive : ''} ${IsIconFav ? styles.iconFav : ''}`}
                        onClick={() => { handleFav(); active(false) }}
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

                <div className={styles.buttonContainer}>
                    <div onClick={active} className={styles.menuButton} />
                </div>
            </nav>
        </header>
    )
}

export default Header