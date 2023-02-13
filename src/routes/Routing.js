import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutHeader from "../components/layout/header/Header";
import MovieView from "../pages/components/MovieList/Content/MovieDetail/movieView";
import UpcommingPage from "../pages/components/MovieList/Upcomming";
import HomePage from "../pages/Home";
import PopularMovieList from './../pages/components/MovieList/MovieList';

const Routing = () => {
    return (
        <BrowserRouter>
            <LayoutHeader/>
            <Routes>
                <Route path={''} element={<HomePage/>} />
                <Route path={'/popular'} element={<PopularMovieList/>} />
                <Route path={'/upcoming'} element={<UpcommingPage/>} />
                <Route path={'/movie'} element={<MovieView/>}/>
            </Routes>
        </BrowserRouter>
    );
};
export default Routing;