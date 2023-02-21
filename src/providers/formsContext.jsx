import { createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { Api } from "../services";
import { toast } from "react-toastify"
import * as yup from 'yup'

export const FormsContext = createContext()

export const FormsProviders = ({ children }) => {
    const navigate = useNavigate()

    const shemaLogin = yup.object({
        email: yup.string().required("O email é obrigátorio"),
        password: yup.string().required("A senha é obrigátoria")
    }).required()

    const schemaCadastro = yup.object({
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

    const schemaAdd = yup.object({
        title: yup.string().required("O nome tecnologia é obrigátoria"),
        status: yup.string().required("O nivel de conhecimento é obrigátorio")
    }).required()

    const schemaEdit = yup.object({
        status: yup.string().required("O nivel de conhecimento é obrigátorio")
    }).required()

    const onSubmitLogin = async (data) => {
        try {
            const response = await Api.post('/sessions', data)
            const user = JSON.stringify(response.data.user)
            window.localStorage.setItem("@USERID", user)
            window.localStorage.setItem("@TOKEN", response.data.token)
            toast.success("Login realizado com sucesso!")
            setTimeout(() => { navigate("/PageDashboard") }, 2850)
        } catch (error) {
            toast.error(`Email ou senha invalida!`)
        }
    }

    const onSubmitCadastro = async (data) => {
        try {
            const response = await Api.post("/users", data)
            toast.success("Usuário cadastrado com sucesso!")
            setTimeout(() => { navigate("/") }, 2850)
        } catch (error) {
            toast.error(`Erro ao cadastrar usuário, verifique os dados novamente!`)
        }
    }

    return (
        <FormsContext.Provider value={{ shemaLogin, onSubmitLogin, navigate, schemaCadastro, onSubmitCadastro, schemaAdd,
         schemaEdit}}>
            {children}
        </FormsContext.Provider>
    )
}