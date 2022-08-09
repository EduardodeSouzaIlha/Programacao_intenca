import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import Title from '../../components/head/Title'
import styles from '../../styles/Home.module.css'

const teste:NextPage = () => {
    return (
        <>
        <Title/>
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

export default teste