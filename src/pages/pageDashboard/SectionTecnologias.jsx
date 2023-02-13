import { Card } from "../../components/CardTech/Card"
import { CardNull } from "../../components/CardTech/CardNull"
import { SectionTecnologiasStyled } from "./SectionTecnologiasStyled"

export const SectionTecnologias = ({ infoUser }) => {
    return (
        <SectionTecnologiasStyled>
            <div>
                <h2>Tecnologias</h2>
                <button><h2>+</h2></button>
            </div>
            <ul>
                {infoUser.techs.length === 0 ? (
                    <CardNull />
                ) : (
                    infoUser.techs.map((tech, index) => {
                        return <Card tech={tech} key={index} />
                    })

                )}
            </ul>
        </SectionTecnologiasStyled>
    )
}