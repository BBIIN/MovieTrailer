import { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieApi } from "../../../apis/movieApi";
import MovieListContent from "./Content/Content";
import MovieListSidebar from "./Sidebar/Sidebar";
import MovieListTitle from "./Title/Title";

function MovieList(){

    // const [movie, setMovieList] = useState([])

    // useEffect(() => {
    //     MovieApi.getPopluarMovies({ params: { page: 1, language: 'ko-KO'}})
    //     .then((res) => {
    //         setMovieList(res.data.results);
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // })

    return(
        <>
            <MovieListTitle/>
            <S.Container>
                <MovieListSidebar/>
                <MovieListContent />
            </S.Container>
        </>
    )
}
export default MovieList;

const Container = styled.div`
    display: flex;
`

const S = {
    Container,
}
