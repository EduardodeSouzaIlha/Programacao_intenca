//Cards os quais levam para outros links
//futuramente poderá ser utilizado para carregar coisas na página talvez?

import { FC } from 'react'
import Link from 'next/link'
import { LinkArea, Title } from './styles';

interface NavLink{
    href: string;   
    title: string;
}

const NavLink: FC<NavLink> = ({href, title}) => {
    return (
        <Link href={href} passHref>
            <LinkArea>
                <Title>{title}</Title>
            </LinkArea>
        </Link>
    )
}

export default NavLink