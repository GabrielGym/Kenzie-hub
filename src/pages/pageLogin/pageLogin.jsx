import { useContext } from 'react'
import logo from '../../assets/logo(1).svg'
import { FucoesExtrasContext } from '../../providers/funcoesExtras'
import { Form } from './form'
import { DivStyled, SectionStyled } from './pageLoginStyle'

const PageLogin = () => {
    const { token, verificacaoLogado, navigate } = useContext(FucoesExtrasContext)
    
    verificacaoLogado()
    
    return (
        <SectionStyled>
            <img src={logo} alt="Kenzie hub" />
            <DivStyled>
                <h1>Login</h1>
                <Form />
                <p>Ainda não possui uma conta?</p>
                <button onClick={() => navigate("/pageCadastro")}>Cadastre-se</button>
            </DivStyled>
        </SectionStyled>
    )
}

export default PageLogin