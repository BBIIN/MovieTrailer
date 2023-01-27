import React, { useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../../../../components/card/Card";
import { useInView } from 'react-intersection-observer';
import useUpcomingMovieQuery from "../../../../qureis/useGetUpcoming";

function UpcomingListContent() {


    const {data: UpcommingList, fetchNextPage, isFetching} = useUpcomingMovieQuery();
    const [ref, inView] = useInView();

    useEffect(() => {
        console.log(inView)
        if(!inView || isFetching) return;   
        fetchNextPage()
    }, [inView,fetchNextPage,isFetching])
     

    return(
        <S.Wrapper>
            <S.Container>
                {UpcommingList && UpcommingList.pages.map((page, index) => (
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
export default UpcomingListContent;

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
