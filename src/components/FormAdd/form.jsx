import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { DivStyledAdd } from "../infoTechs/AddTechsStyled"
import { useContext } from "react"
import { FormsContext } from "../../providers/formsContext"
import { FuncoesTechContext } from "../../providers/funcoesTechContext"

export const FormAdd = () => {

    const { schemaAdd, navigate} = useContext(FormsContext)
    const { addTech } = useContext(FuncoesTechContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaAdd)
    })

    return (<DivStyledAdd>
        <div>
            <div>
                <h2>Cadastrar Tecnologia</h2>
                <button onClick={() => navigate('/PageDashboard')}><p>X</p></button>
            </div>
            <form onSubmit={handleSubmit(addTech)}>
                <label>Nome</label>
                <input type="text" {...register('title')} placeholder="Nome da tecnologia"/>
                <p>{errors.title?.message}</p>
                <label>Selecionar status</label>
                <select {...register('status')}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <p>{errors.status?.message}</p>
                <button type="submit"><h2>Cadastrar Tecnologia</h2></button>
            </form>
        </div>

    </DivStyledAdd>)
}