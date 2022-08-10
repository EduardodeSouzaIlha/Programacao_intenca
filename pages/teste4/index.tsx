import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import HeadComponent from '../../components/HeadComponent/HeadComponent'
import styles from '../../styles/Home.module.css'

const Teste4:NextPage = () => {
    return (
        <>
        <HeadComponent/>
        <Header />
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    TESTE4
                </h1>
            </main>
        </div>
        </>
    )
}

export default Teste4