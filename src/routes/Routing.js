import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutHeader from "../components/layout/header/Header";
import UpcommingPage from "../pages/components/UpComming/Upcomming";
import HomePage from "../pages/Home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path={''} element={<HomePage/>} />
                    <Route path={'/upcomming'} element={<UpcommingPage/>} />
                
            </Routes>
        </BrowserRouter>
    );
};
export default Routing;