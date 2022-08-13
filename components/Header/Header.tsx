//Header principal da página, seus elementos são os HeaderSection
//conforme clicado no HeaderSection, a página mudará

import Link from 'next/link'
import Image from 'next/image'
import NavBar from './NavBar/NavBar'
import { ImageWrapper, HeaderWrapper } from './style'
import blackIcon from '../../src/icon/blackIcon.svg'
import whiteIcon from '../../src/icon/whiteIcon.svg'

const LinkCard = () => {
    return (
        <>
            <HeaderWrapper>
                <ImageWrapper>
                    <Link href="/"><a>
                        <Image  
                            src={whiteIcon}
                            alt="catcode icon"
                            width={"80%"}
                        />
                        </a></Link>
                </ImageWrapper>
                <NavBar />
                <ImageWrapper>
                    <Link href="/perfil"><a>
                        <Image  
                            src={blackIcon}
                            alt="catcode icon"
                            width={"80%"}
                        />
                        </a></Link>
                </ImageWrapper>
            </HeaderWrapper>
        </>
    )
}

export default LinkCard