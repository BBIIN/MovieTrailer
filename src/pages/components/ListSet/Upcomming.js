import styled from "styled-components";
import UpcomingListContent from "../MovieList/Content/UpcommingListContent";
import MovieListSidebar from "../../../components/layout/sidebar/Sidebar";
import MovieListTitle from "../MovieList/Title/Title";

function UpcommingMovieList(){



    return(
        <>
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
