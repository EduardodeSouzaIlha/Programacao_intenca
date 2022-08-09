//Cards os quais levam para outros links
//futuramente poderá ser utilizado para carregar coisas na página talvez? 

import { FC } from 'react'
import styles from './LinkCard.module.css'

interface LinkCard{ //tipos das props
    href: string;
    title: string;
    text: string;
}

const LinkCard: FC<LinkCard> = ({href, title, text}) => {
    return (
        <>
            <a className={styles.linkCard} href={href} rel="noreferrer" target='_blank'>
                 <h2>{title} &rarr;</h2> {/* titulo e flechinha */}
                <p>{text}</p>
            </a>
        </>
    )
}

export default LinkCard