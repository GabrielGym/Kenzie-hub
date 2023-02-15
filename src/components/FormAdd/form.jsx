import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { Api } from "../../services"
import { useNavigate } from "react-router-dom"
import { DivStyledAdd } from "../infoTechs/AddTechsStyled"

const schema = yup.object({
    title: yup.string().required("O nome tecnologia é obrigátoria"),
    status: yup.string().required("O nivel de conhecimento é obrigátorio")
}).required()

export const FormAdd = () => {
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        const token = localStorage.getItem('@TOKEN')
        try {

            await Api.post('/users/techs', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success("Login realizado com sucesso!")
            setTimeout(() => { navigate("/PageDashboard") }, 2850)

        } catch (error) {
            console.log(error)
            toast.error(`Tecnologia invalida!`)
            reset()
        }

    }

    return (<DivStyledAdd>
        <div>
            <div>
                <h2>Cadastrar Tecnologia</h2>
                <button onClick={() => navigate('/PageDashboard')}><p>X</p></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nome</label>
                <input type="text" {...register('title')} />
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