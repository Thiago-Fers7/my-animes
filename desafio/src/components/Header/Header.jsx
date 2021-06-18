import styles from './styles.module.css';

function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav>
                <strong>Meus animes</strong>
                <ul>
                    <li>Início</li>
                    <li>Animes</li>
                    <li>Favoritos</li>
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