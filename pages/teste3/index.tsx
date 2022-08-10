import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import Head from '../../components/HeadComponent/HeadComponent'
import styles from '../../styles/Home.module.css'

const Teste3:NextPage = () => {
    return (
        <>
        <Head title='Teste3'/>
        <Header />
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    TESTE3
                </h1>
            </main>
        </div>
        </>
    )
}

export default Teste3