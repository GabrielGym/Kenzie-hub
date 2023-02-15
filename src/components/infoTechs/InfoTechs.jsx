import { FormAdd } from "../FormAdd/form"
import { FormEdit } from "../FormEdit/FormEdit"
import { DivStyledEdit } from "./EditTech.js"

export const InfoTechs = ({ modal, setModal }) => {

    return (
        !modal ? (
            <FormAdd />
        ) : (
            <FormEdit setModal={setModal} />
        )

    )
}