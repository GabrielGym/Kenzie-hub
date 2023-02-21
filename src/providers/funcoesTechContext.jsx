import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { Api } from "../services";
import { FucoesExtrasContext } from "./funcoesExtras";
import { VerificacaoModal } from "./verificaçãoModalContext";

export const FuncoesTechContext = createContext()

export const FuncoesTechProviders = ({ children }) => {
    const { setModal } = useContext(VerificacaoModal)
    const { token, infoTech, navigate } = useContext(FucoesExtrasContext)
    const { id } = infoTech || []

    const addTech = async (data) => {
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

    const DeleteTech = async (id) => {
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
        <FuncoesTechContext.Provider value={{ addTech, EditTech, DeleteTech }}>
            {children}
        </FuncoesTechContext.Provider>
    )
}