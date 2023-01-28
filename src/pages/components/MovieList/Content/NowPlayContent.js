import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../../../../components/card/Card";
import { useInView } from 'react-intersection-observer';
import useNowPlayingMovieQuery from './../../../../qureis/useGetNowPlaying';
import axios from "axios";
import qureyKey from "../../../../conts/qureyKey";
import MovieApi from "../../../../apis/movieApi";
import { Link } from "react-router-dom";

function NowMovieListContent() {


    const {data: movieList, fetchNextPage, isFetching} = useNowPlayingMovieQuery();
    const [ref, inView] = useInView();

    const [movie, setMovie] = useState()

    useEffect(() => {
        console.log(inView)
        if(!inView || isFetching) return;   
        // isFetching : fetch 하는 중일때는 다음 페이지로 못 넘어가게 막음
        // 막지않으면 T / F  가 반복되어 요청이 많아지기 때문
        fetchNextPage()
    }, [inView,fetchNextPage,isFetching])

    //detail

    return(
        <S.Wrapper>
            <S.Container>
                {movieList && movieList.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.data.results.map((movie, index) => (
                            <MovieCard movie={movie} key={index}/>
                        ))}
                    </React.Fragment>
                ))}
                <div ref={ref}/>
            </S.Container>
        </S.Wrapper>
    )
}
export default NowMovieListContent;

const Wrapper = styled.div`
    min-height: 100vh;
    width: calc(100% - 340px);
    display: flex;
    justify-content: center;
    padding: 0 64px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const S = {
    Wrapper,
    Container
}
