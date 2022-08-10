import NavLink from '../NavLink/NavLink'
import { Wrapper } from './styles'

const NavBar = () => {
    return (
        <Wrapper>
            <NavLink title="teste1" href="teste1"/>
            <NavLink title="teste2" href="teste2"/>
            <NavLink title="teste3" href="teste3"/>
            <NavLink title="teste4" href="teste4"/>
            <NavLink title="teste5" href="teste5"/>
        </Wrapper>
    )
}

export default NavBar