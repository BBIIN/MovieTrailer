import styled from "styled-components"
import banner from '../../../assets/img/subBanner.jpg'

function SubBanner() {
    return(
        <S.Wrapper>
            <img src={banner} alt='banner'/>
            <div></div>
            <S.Text>
                LET'S WATCH MOVIE
                <br/>
                <span>TOGETHER</span>
            </S.Text>
        </S.Wrapper>
    )
}
export default SubBanner

const Wrapper = styled.div`
    position: relative;
    & > img {
        width: 100%;
        height: calc(100vh - 450px);
        min-height: 300px;
        object-fit: cover;
    }
    & > div {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: calc(100vh - 450px);
        min-height: 300px;
        background-color: rgba(255, 255, 255, 0.1);
    }
`

const Text = styled.p`
    text-align: right;
    position: absolute;
    font-weight: ${({theme}) => theme.fontWeight.bold};
    top: 50%;
    right: 5%;
    text-shadow: 4px 4px 4px #bdbdbd;
    /* transform: translate(-50%, -50%); */
    font-size: 58px;
    color: #feb23f;
    & span {
        color: #fff;
    }
`

const S = {
    Wrapper,
    Text
}