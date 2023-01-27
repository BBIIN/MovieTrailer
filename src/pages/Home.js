import styled from "styled-components"
import HomeBanner from "./components/banner/MainBanner"
import NowPlayingMovieList from "./components/MovieList/NowPlayList"

function HomePage(){
    return(
        <S.Wrapper>
            <HomeBanner/>
            <NowPlayingMovieList/>
        </S.Wrapper>
    )
}
export default HomePage

const Wrapper = styled.div`
`

const S = {
    Wrapper
}