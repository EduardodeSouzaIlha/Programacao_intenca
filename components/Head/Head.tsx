import NextHead from 'next/head'
import {FC} from 'react';

interface HeadProps {
    title: string;
}

const Head:FC<HeadProps> = ({title}) => {
    return(
        <>
            <NextHead>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </NextHead>
        </>
    )
}
export default Head;