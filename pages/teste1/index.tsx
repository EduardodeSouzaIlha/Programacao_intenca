import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import styles from '../../styles/Home.module.css'
import Head from '../../components/HeadComponent/HeadComponent'
const Teste1:NextPage = () => {
    return (
        <>
        <Head title='Teste1'/>
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