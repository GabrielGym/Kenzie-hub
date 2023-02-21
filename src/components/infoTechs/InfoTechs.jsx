import { useContext } from "react"
import { VerificacaoModal } from "../../providers/verificaçãoModalContext"
import { FormAdd } from "../FormAdd/form"
import { FormEdit } from "../FormEdit/FormEdit"

export const InfoTechs = () => {
    const { modal, setModal } = useContext(VerificacaoModal)

    return (
        !modal ? (
            <FormAdd />
        ) : (
            <FormEdit setModal={setModal} />
        )

    )
}