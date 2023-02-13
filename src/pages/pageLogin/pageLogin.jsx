import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo (1).svg'
import { Form } from './form'
import { DivStyled, SectionStyled } from './pageLoginStyle'

const PageLogin = () => {
    const navigate = useNavigate()

    return (
        <SectionStyled>
            <img src={logo} alt="Kenzie hub" />
            <DivStyled>
                <h1>Login</h1>
                <Form/>
                <p>Ainda não possui uma conta?</p>
                <button onClick={() => navigate("/pageCadastro")}>Cadastre-se</button>
            </DivStyled>
        </SectionStyled>
    )
}

export default PageLogin