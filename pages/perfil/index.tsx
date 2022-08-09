import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import styles from '../../styles/Home.module.css'
import Title from '../../components/head/Title'
const teste:NextPage = () => {
    return (
        <>
        <Title/>
        <Header />
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    PERFIL
                </h1>
            </main>
        </div>
        </>
    )
}

export default teste