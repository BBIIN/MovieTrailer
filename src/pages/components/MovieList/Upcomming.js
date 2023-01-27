import styled from "styled-components";
import SubBanner from "../banner/subBanner";
import UpcomingListContent from "./Content/UpcommingListContent";
import MovieListSidebar from "./Sidebar/Sidebar";
import MovieListTitle from "./Title/Title";

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
