import { FormStyled } from "./formStyled"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Api } from '../../services'
import { toast } from "react-toastify"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().required("O email é obrigátorio"),
    password: yup.string().required("A senha é obrigátoria")
}).required()

export const Form = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        try {
            const response = await Api.post('/sessions', data)
            const user = JSON.stringify(response.data.user)
            window.localStorage.setItem("@USERID", user)
            window.localStorage.setItem("@TOKEN", response.data.token)
            toast.success("Login realizado com sucesso!")
            setTimeout(() => { navigate("/PageDashboard") }, 2850)
        } catch (error) {
            toast.error(`Email ou senha invalida!`)
            reset()
        }
    }

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
            <input type='email' placeholder="Digite seu email" {...register('email')} />
            <p>{errors.email?.message}</p>
            <label>Senha</label>
            <input type='password' placeholder="Digite sua senha" {...register('password')} />
            <p>{errors.password?.message}</p>
            <button>Entrar</button>
        </FormStyled>
    )
}