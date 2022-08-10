import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import styles from '../../styles/Home.module.css'
import HeadComponent from '../../components/HeadComponent/HeadComponent'
const Teste1:NextPage = () => {
    return (
        <>
        <HeadComponent/>
        <Header />
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    TESTE1
                </h1>
            </main>
        </div>
        </>
    )
}

export default Teste1