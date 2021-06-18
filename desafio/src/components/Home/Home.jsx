import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'


function Home() {
    const { } = useContext(HomeContext)

    return (
        <section>
            <p>Capa 1</p>
        </section>
    )
}

export default Home