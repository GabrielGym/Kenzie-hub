import { FormStyled } from './formStyled'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { FormsContext } from '../../providers/formsContext';

export const Form =  () => {
    const { schemaCadastro, onSubmitCadastro} = useContext(FormsContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schemaCadastro)
    })

    
    return (
        <FormStyled onSubmit={handleSubmit(onSubmitCadastro)}>
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