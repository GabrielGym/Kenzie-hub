import { FormStyled } from "./formStyled"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { FormsContext } from "../../providers/formsContext"

export const Form = () => {
    const {shemaLogin, onSubmitLogin} = useContext(FormsContext)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(shemaLogin)
    })

    return (
        <FormStyled onSubmit={handleSubmit(onSubmitLogin)}>
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