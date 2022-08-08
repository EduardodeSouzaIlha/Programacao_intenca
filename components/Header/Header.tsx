//Header principal da página, seus elementos são os HeaderSection
//conforme clicado no HeaderSection, a página mudará

import { FC } from 'react'
import Link from 'next/Link'
import HeaderNav from './HeaderNav/HeaderNav'
import styles from './Header.module.css'

const LinkCard: FC = () => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <a className={styles.bunda}>Logo</a>
                </Link>
                <HeaderNav />
                <Link href="perfil">
                    <a className={styles.bunda}>Perfil</a>
                </Link>
            </header>
        </>
    )
}

export default LinkCard