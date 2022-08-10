//Header principal da página, seus elementos são os HeaderSection
//conforme clicado no HeaderSection, a página mudará

import Link from 'next/Link'
import NavBar from './NavBar/NavBar'
import styles from './Header.module.css'

const LinkCard = () => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <a className={styles.bunda}>Logo</a>
                </Link>
                <NavBar />
                <Link href="perfil">
                    <a className={styles.bunda}>Perfil</a>
                </Link>
            </header>
        </>
    )
}

export default LinkCard