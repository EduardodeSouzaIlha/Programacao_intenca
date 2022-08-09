import HeaderSection from '../HeaderSection/HeaderSection'
import styles from './HeaderNav.module.css'

const HeaderNav = () => {
    return (
        <div className={styles.divLinks}>
            <HeaderSection title="teste1" href="teste1"/>
            <HeaderSection title="teste2" href="teste2"/>
            <HeaderSection title="teste3" href="teste3"/>
            <HeaderSection title="teste4" href="teste4"/>
            <HeaderSection title="teste5" href="teste5"/>
        </div>
    )
}

export default HeaderNav