import { SectionInfoStyled } from "./SectionInfoStyled"

export const SectionInfo = ({infoUser}) => {

    return (
        <SectionInfoStyled>
            <div>
                <h1>Olá, {infoUser.name}</h1>
                <p>{infoUser.course_module}</p>
            </div>
        </SectionInfoStyled>
    )
}