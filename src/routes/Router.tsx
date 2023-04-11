import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { RecepcionRemitos } from '../pages/recepcion-remitos';
import { RouterLayout } from '../common/RouterLayout';
import { GestionRemitos } from '../pages/gestion-remitos/GestionRemitos';
import { Practice } from '../pages/practice/index';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/recepcion-remitos" element={<RecepcionRemitos />} />
                <Route path="/gestion-remitos" element={<GestionRemitos />} />
            </Route>
            <Route path="/practice" element={<Practice />} />
        </Routes>
    )
}
