import React, { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../../../../components/card/Card";
import { useInView } from 'react-intersection-observer';
import usePopularMovieQureey from './../../../../qureis/useGetPopularMovie';

function MovieListContent() {

    // const [mocData] = useState([{},{},{},{},{},{},{}])

    const {data: movieList, fetchNextPage, isFetching} = usePopularMovieQureey();
    const [ref, inView] = useInView();
    //  ref = useRef : html 요소 선택
    //  inView : 감지 됨에 따라 변화되는 옵션 값

    useEffect(() => {
        // console.log(inView)
        if(!inView || isFetching) return;   
        // isFetching : fetch 하는 중일때는 다음 페이지로 못 넘어가게 막음
        // 막지않으면 T / F  가 반복되어 요청이 많아지기 때문
        fetchNextPage()
    }, [inView])
     

    return(
        <S.Wrapper>
            <S.Container>
                {/* {mocData.map((movie) => (
                    <MovieCard movie={movie}/>
                ))} */}
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
export default MovieListContent;

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
