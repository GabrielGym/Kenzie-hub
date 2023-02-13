import { useNavigate } from 'react-router-dom'
import { FormStyled } from './formStyled'
import { useForm } from "react-hook-form";
import { Api } from '../../components/services';
import { toast } from 'react-toastify';


export const Form = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await Api.post("/users", data)
            toast.success("Usuário cadastrado com sucesso")
            setTimeout(() => { navigate("/") }, 2850);
        } catch (error) {
            toast.error(`${error.message}`)
            reset()
        }
    }
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input placeholder="Digite aqui seu nome" {...register("name")} />
            <label>Email</label>
            <input placeholder="Digite aqui seu email" {...register("email")} />
            <label>Senha</label>
            <input placeholder="Digite aqui sua senha" {...register("password")} />
            <label>Confirmar Senha</label>
            <input placeholder="Digite novamente sua senha" />
            <label>Bio</label>
            <input placeholder="Fale sobre você" {...register("bio")} />
            <label>Contato</label>
            <input placeholder="Opção de contato" {...register("contact")} />
            <label>Selecionar módulo</label>
            <select name=""  {...register("course_module")} >
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
            <button>Cadastrar</button>
        </FormStyled>
    )
}