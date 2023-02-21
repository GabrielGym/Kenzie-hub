import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import lixo from '../../assets/lixo.png'
import { VerificacaoModal } from "../../providers/verificaçãoModalContext"
import { Link } from "react-router-dom";
import { FuncoesTechContext } from "../../providers/funcoesTechContext";

export const Card = ({ tech }) => {
    const { setModal } = useContext(VerificacaoModal)
    const { DeleteTech } = useContext(FuncoesTechContext)

    const navigate = useNavigate()
    const info = () => {
        setModal(true)
        navigate(":infoTechs")
        window.localStorage.setItem('@INFOTECH', JSON.stringify(tech))
    }
    useEffect(() => {

    }, [tech])

    return (
        <li>
            <Link to={tech.id} onClick={info}>
                <h2>{tech.title}</h2>
                <p>{tech.status}</p>
            </Link>
            <button onClick={() => {
                DeleteTech(tech.id)
            }}><img src={lixo} alt="deletar" /></button>
        </li>
    )
}