import styled from "styled-components";
import NowMovieListContent from "./Content/NowPlayContent";
import MovieListSidebar from "./Sidebar/Sidebar";
import MovieListTitle from "./Title/Title";

function NowPlayingMovieList(){



    return(
        <>
            <MovieListTitle/>
            <S.Container>
                <MovieListSidebar/>
                <NowMovieListContent/>
            </S.Container>
        </>
    )
}
export default NowPlayingMovieList;

const Container = styled.div`
    display: flex;
`

const S = {
    Container,
}
