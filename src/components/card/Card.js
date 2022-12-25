import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import ReplaceImage from '../../assets/img/unknown.png'
import { flexCenter } from "../../styles/common"
import '../../styles/index.css'

function MovieCard({movie}){

    // movie 값 받아와서 화면에 뿌려보기
    console.log(movie)  // 설명에 적을 것 확인하기

    const IMG_URL = useRef(process.env.REACT_APP_IMAGE_URL)
    const [movieOverView, setMovieOverView] = useState('')

    useEffect(() => {
        if(!movie) return;
        if(movie.overview.length > 100) {
            setMovieOverView(movie.overview.slice(0 , 100) + ' ... ')
        }else {
            setMovieOverView(movieOverView)
        }
    }, [movie])

    return(
        <S.Wrapper>
            <div>
                <S.Poster>
                    <img src={movie.poster_path ? IMG_URL.current + movie.poster_path : ReplaceImage} alt='image'/>
                </S.Poster>
                <S.DescBox>
                    <h1>{movie.title}</h1>
                    <div>{movie.vote_average}</div>
                    <p>{movieOverView}</p>
                </S.DescBox>
            </div>
        </S.Wrapper>
    )
}
export default MovieCard

const Wrapper = styled.div`
    width: 340px;
    height: 610px;
    margin: 8px;
    overflow: hidden;
`;

const Poster = styled.div`
    ${flexCenter}
    & img {
        width: 260px;
        aspect-ratio: 9 / 16;
    }
`;
const DescBox = styled.div`
    width: 260px;
    margin: 0 auto;

    & h1 {
        color: #fff;
        font-size: ${({ theme }) => theme.palette.fontColor};
        margin-top: 10px;
        font-family: 'ONE-Mobile-Title-bold';
    }
    & div {
        padding-top: 3px;
        color: yellow;
        font-family: 'ONE-Mobile-Title-Regular';
    }
    & p {
        color: #999;
        margin-top: 15px;
        font-family: 'ONE-Mobile-Title-Light';
    }
`;

const S = {
    Wrapper,
    Poster,
    DescBox,
};
