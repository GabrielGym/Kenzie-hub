import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { DivStyledEdit } from "../infoTechs/EditTech"
import { useContext } from "react"
import { FormsContext } from "../../providers/formsContext"
import { FucoesExtrasContext } from "../../providers/funcoesExtras"
import { FuncoesTechContext } from "../../providers/funcoesTechContext"

export const FormEdit = ({ setModal }) => {

    const { schemaEdit, navigate,} = useContext(FormsContext)
    const { infoTech } = useContext(FucoesExtrasContext)
    const { EditTech, DeleteTech} = useContext(FuncoesTechContext)
    const { title } = infoTech
    const { id } = infoTech

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaEdit)
    })
    
    return (
        <DivStyledEdit>
            <div>
                <div>
                    <h2>Tecnologia Detalhes</h2>
                    <button onClick={() => {
                        navigate('/PageDashboard')
                        setModal(false)
                    }}><p>X</p></button>
                </div>
                <form onSubmit={handleSubmit(EditTech)}>
                    <label>Nome do projeto</label>
                    <p>{title}</p>
                    <label>Selecionar status</label>
                    <select {...register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <p>{errors.status?.message}</p>
                    <button><h2>Cadastrar Tecnologia</h2></button>
                </form>
                <button type="submit" onClick={() => {
                    DeleteTech(id)
                }}><h2>Excluir</h2></button>
            </div>
        </DivStyledEdit>
    )
}