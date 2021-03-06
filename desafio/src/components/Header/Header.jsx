import { useContext, useState } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import styles from './styles.module.css';


// adicionar elemento para notificar quando um anime foi adicionado aos favoritos

// adicionar borda verde para os animes que já foram adiciondos aos favoritos
// verificar quando o anime foi adicionado aos Favoritos
// verificar se o anime já está adicionado aos favoritos

function Header() {
    const {
        isHome,
        isAnimes,
        isFav,
        handleAnimes,
        handleHome,
        handleFav,
        searchResult,
        exitSearchMode,
        IsIconFav,
        buttonInstall,
        isInstall
    } = useContext(GlobalContext)

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

                {isInstall && (
                    <button type="button" onClick={buttonInstall} className={styles.downloadButton}>
                        <img src="/images/get_app.svg" alt="Instalar Aplicativo" />
                    </button>
                )}
            </nav>
        </header>
    )
}

export default Header