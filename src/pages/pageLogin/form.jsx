import { FormStyled } from "./formStyled"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Api } from "../../components/services";
import { toast } from "react-toastify";


export const Form = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await Api.post('/sessions', data)
            const user = JSON.stringify(response.data.user)
            localStorage.setItem("@USERID", user)
            localStorage.setItem("@TOKEN", response.data.token)
            toast.success("Login realizado com sucesso")
            setTimeout(() => { navigate("/PageDashboard") }, 2850)
        } catch (error) {
            toast.error(`${error}`)
            reset()
        }

    }

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input placeholder="Digite seu email" {...register('email')} />
            <label>Senha</label>
            <input placeholder="Digite sua senha" {...register('password')} />
            <button>Entrar</button>
        </FormStyled>
    )
}