//Cards os quais levam para outros links
//futuramente poderá ser utilizado para carregar coisas na página talvez?

import { FC } from 'react'
import styles from './HeaderSection.module.css'
import Link from 'next/Link'

interface HeaderSection{
    href: string;   
    title: string;
}

const HeaderSection: FC<HeaderSection> = ({href, title}) => {
    return (
        <Link href={href}>
            <a className={styles.link}>
                <div>{title}</div>
            </a>
        </Link>
    )
}

export default HeaderSection