import logo from '../../assets/logo(1).svg'
import { useNavigate } from 'react-router-dom'
import { Form } from './form'
import { SectionStyled } from './pageCadastroStyled'

const PageCadastro = () => {
    const navigate = useNavigate()

    return(
        <SectionStyled>
            <img src={logo} alt="Kenzie hub" />
            <button onClick={() => navigate(-1)}>Voltar</button>
            <div>
                <h1>Crie sua conta</h1>
                <p>Rapido e grátis, vamos nessa</p> 
                <Form/>
            </div>
        </SectionStyled>
    )
}

export default PageCadastro