import { Routes, Route } from "react-router-dom"
import PageLogin from '../pages/pageLogin/pageLogin'
import PageCadastro from '../pages/pageCadastro/pageCadastro.jsx'
import { PageDashboard } from "../pages/pageDashboard/PageDashboard"
import { InfoTechs } from "../components/infoTechs/InfoTechs"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<PageLogin />} />
            <Route path='/pageCadastro' element={<PageCadastro />} />
            <Route  path='/pageDashboard' element={<PageDashboard/>}>
                <Route path=':infoTechs' element={<InfoTechs/>} />
            </Route>
        </Routes>
    )
}