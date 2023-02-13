import { Card } from "../../components/CardTech/Card"
import { CardNull } from "../../components/CardTech/CardNull"
import { SectionTecnologiasStyled } from "./SectionTecnologiasStyled"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    title: yup.string().required("O nome tecnologia é obrigátoria"),
    status: yup.string().required("O nivel de conhecimento é obrigátorio")
}).required()

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