import type { NextPage } from 'next'
import Header from '../../components/Header/Header'
import styles from '../../styles/Home.module.css'
import Teste from '../../components/Teste/teste'
import style from './styles.module.css'
import HeadComponent from '../../components/HeadComponent/HeadComponent'

const perfil: NextPage = () => {
    return (
        <>
            <HeadComponent/>
            <Header />
            <div className={style.content}>
                <main className={styles.main}>
                  
                        <Teste value='Nome' name='Message' />
                  
                </main>
            </div>
        </>
    )
}

export default perfil