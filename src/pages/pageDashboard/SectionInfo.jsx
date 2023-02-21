import { useContext } from "react"
import { FucoesExtrasContext } from "../../providers/funcoesExtras"
import { SectionInfoStyled } from "./SectionInfoStyled"

export const SectionInfo = ({}) => {
    const { infoUser } = useContext(FucoesExtrasContext)

    return (
        <SectionInfoStyled>
            <div>
                <h1>Olá, {infoUser.name}</h1>
                <p>{infoUser.course_module}</p>
            </div>
        </SectionInfoStyled>
    )
}