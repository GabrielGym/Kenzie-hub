import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { Api } from "../../services"
import { useNavigate } from "react-router-dom"
import { DivStyledEdit } from "../infoTechs/EditTech"


const schema = yup.object({
    status: yup.string().required("O nivel de conhecimento é obrigátorio")
}).required()


export const FormEdit = ({ setModal }) => {
    const navigate = useNavigate()
    const infoTechs = localStorage.getItem('@INFOTECH')
    const infoTech = JSON.parse(infoTechs)
    const { title } = infoTech
    const { id } = infoTech
    const token = localStorage.getItem('@TOKEN')
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const EditTech = async (data) => {
        try {
            await Api.put(`/users/techs/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success("Atualização realizada com sucesso!")
            setTimeout(() => { navigate("/PageDashboard") }, 2850)
        } catch (error) {
            console.log(error)
            toast.error(`Tecnologia invalida!`)
        }
    }

    const DeleteTech = async () => {
        try {
            await Api.delete(`/users/techs/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success("Tecnologia deletada com sucesso!")
            setTimeout(() => { 
                navigate("/PageDashboard")
                setModal(false)
            }, 500)
        } catch (error) {
            console.log(error)
            toast.error(`Erro ao deletar tecnologia!`)
        }
    }

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
                        <option value="iniciante">Iniciante</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="avancado">Avançado</option>
                    </select>
                    <p>{errors.status?.message}</p>
                    <button><h2>Cadastrar Tecnologia</h2></button>
                </form>
                <button type="submit" onClick={() => {
                    DeleteTech()
                }}><h2>Excluir</h2></button>
            </div>
        </DivStyledEdit>
    )
}