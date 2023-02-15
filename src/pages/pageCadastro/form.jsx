import { useNavigate } from 'react-router-dom'
import { FormStyled } from './formStyled'
import { useForm } from "react-hook-form";
import { Api } from '../../services'
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
    name: yup.string().required("O nome é obrigátorio"),
    email: yup.string().required("O email é obrigátorio"),
    password: yup.string()
    .matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[\w|_]/, 'Deve ter pelo menos um caracter especial')
    .matches(/.{8,}/, 'Deve aver no mínimo 8 caracteres').required("A senha é obrigátoria"),
    passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'A confirmação de senha deve ser igual a senha').required("É necessário a confirmação da senha"),
    bio: yup.string().required("Escreva um pouco sobre você"),
    contact: yup.string().required("Coloque uma forma de contato"),
    course_module: yup.string().required("Escolha o modulo que você está"),
}).required()

export const Form =  () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {
        try {
            const response = await Api.post("/users", data)
            toast.success("Usuário cadastrado com sucesso!")
            setTimeout(() => { navigate("/") }, 2850)
        } catch (error) {
            toast.error(`Erro ao cadastrar usuário, verifique os dados novamente!`)
        }
    }
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input placeholder="Digite aqui seu nome" {...register("name")} />
            <p>{errors.name?.message}</p>
            <label>Email</label>
            <input type='email' placeholder="Digite aqui seu email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <label>Senha</label>
            <input placeholder="Digite aqui sua senha" {...register("password")} />
            <p>{errors.password?.message}</p>
            <label>Confirmar Senha</label>
            <input placeholder="Digite novamente sua senha" {...register("passwordConfirmation")} />
            <p>{errors.passwordConfirmation?.message}</p>
            <label>Bio</label>
            <input placeholder="Fale sobre você" {...register("bio")} />
            <p>{errors.bio?.message}</p>
            <label>Contato</label>
            <input placeholder="Opção de contato" {...register("contact")} />
            <p>{errors.contact?.message}</p>
            <label>Selecionar módulo</label>
            <select name=""  {...register("course_module")} >
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            <p>{errors.course_module?.message}</p>
            <button>Cadastrar</button>
        </FormStyled>
    )
}