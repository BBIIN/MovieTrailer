import styled from "styled-components";
import MovieListSidebar from "../../../components/layout/sidebar/Sidebar";
import SubBanner from "../banner/subBanner";
import UpcomingListContent from "./Content/UpcommingListContent";
import MovieListTitle from "../../../components/layout/Title/Title";

function UpcommingMovieList(){



    return(
        <>
        <SubBanner/>
            <MovieListTitle/>
            <S.Container>
                <MovieListSidebar/>
                <UpcomingListContent />
            </S.Container>
        </>
    )
}
export default UpcommingMovieList;

const Container = styled.div`
    display: flex;
`

const S = {
    Container,
}
