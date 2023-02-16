import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo(1).svg'
import { HeaderStyled } from "./HeaderStyled"


export const Header = () => {
    const navigate = useNavigate()

    const Logout = () => {
        window.localStorage.clear()
        navigate("/")
    }

    return (
        <HeaderStyled>
            <nav>
                <img src={logo} alt="Kenzie hub" />
                <button onClick={Logout}>Sair</button>
            </nav>
        </HeaderStyled>
    )
}