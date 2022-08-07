import { FC } from 'react'
import styles from '../styles/Home.module.css'

interface Props{
    href: string;
    title: string;
    text: string;
}

const LinkCard: FC<Props> = ({href, title, text}) => {
    return (
        <>
            <a className={styles.card} href={href} rel="noreferrer" target='_blank'>
                <h2>{title} &rarr;</h2>
                <p>{text}</p>
            </a>
        </>
    )
}

export default LinkCard