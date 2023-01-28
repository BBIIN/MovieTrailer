import styled from "styled-components";
import SubBanner from "../banner/subBanner";
import PopularMovieListContent from "./Content/PopularListContent";
import MovieListSidebar from "../../../components/layout/sidebar/Sidebar";
import MovieListTitle from "../../../components/layout/Title/Title";

function PopularMovieList(){



    return(
        <>
        <SubBanner/>
            <MovieListTitle/>
            <S.Container>
                <MovieListSidebar/>
                <PopularMovieListContent />
            </S.Container>
        </>
    )
}
export default PopularMovieList;

const Container = styled.div`
    display: flex;
`

const S = {
    Container,
}
