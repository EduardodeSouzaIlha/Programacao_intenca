import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import styles from '../../styles/Home.module.css'
import Teste from '../../components/Teste/teste'
import style from './style.module.css'
import Title from '../../components/head/Title'

const teste: NextPage = () => {
    return (
        <>
            <Title/>
            <Header />
            <div className={style.body}>
                <main className={styles.main}>
                  
                        <Teste value='Nome' name='Message' />
                  
                </main>
            </div>
        </>
    )
}

export default teste