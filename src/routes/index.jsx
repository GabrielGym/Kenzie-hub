import { Routes, Route } from "react-router-dom"
import PageLogin from '../pages/pageLogin/pageLogin'
import PageCadastro from '../pages/pageCadastro/pageCadastro.jsx'
import { PageDashboard } from "../pages/pageDashboard/PageDashboard"
import { InfoTechs } from "../components/infoTechs/InfoTechs"
// import { EditTechs } from "../components/EditTech/EditTech.jsx"
import { useState } from "react"

export const AppRoutes = () => {
    const [modal, setModal] = useState()
    return (
        <Routes>
            <Route path='/' element={<PageLogin />} />
            <Route path='/pageCadastro' element={<PageCadastro />} />
            <Route  path='/pageDashboard' element={<PageDashboard setModal={setModal} />}>
                <Route path=':infoTechs' element={<InfoTechs setModal={setModal} modal={modal} />} />
            </Route>
        </Routes>
    )
}