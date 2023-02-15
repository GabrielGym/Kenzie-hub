import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo(1).svg'
import { HeaderStyled } from "./HeaderStyled"


export const Header = () => {
    const navigate = useNavigate()

    const redirectionPageLogin = () => {
        window.localStorage.clear()
        navigate("/")
    }

    return (
        <HeaderStyled>
            <nav>
                <img src={logo} alt="Kenzie hub" />
                <button onClick={redirectionPageLogin}>Sair</button>
            </nav>
        </HeaderStyled>
    )
}