import { useContext } from "react"
import logo from '../../assets/logo(1).svg'
import { FucoesExtrasContext } from "../../providers/funcoesExtras"
import { HeaderStyled } from "./HeaderStyled"


export const Header = () => {
    const { navigate, Logout } = useContext(FucoesExtrasContext)

    return (
        <HeaderStyled>
            <nav>
                <img src={logo} alt="Kenzie hub" />
                <button onClick={Logout}>Sair</button>
            </nav>
        </HeaderStyled>
    )
}