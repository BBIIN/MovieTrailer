import styled from 'styled-components'
import { flexAlignCenter } from '../../../styles/common';
import '../../../styles/index.css'

function LayoutHeader(){
    
    return(
        <S.wrapper>
            <S.logo>XFLIX</S.logo>
            <S.Nav>
                <li>now</li>
                <li>upComming</li>
                <li>top-rated</li>
            </S.Nav>
        </S.wrapper>
    )
}
export default LayoutHeader


const wrapper = styled.div`
    width: 100%;
    height: 150px;
    ${flexAlignCenter}
    justify-content: space-between;
    padding: 0 32px;
    background-color: ${({theme})=> theme.palette.blackColor};
`

const logo = styled.div`
    color: ${({theme}) => theme.palette.mainColor};
    font-size: 76px;
    font-weight: ${({theme}) => theme.fontWeight.bold};
`

const Nav = styled.ul`
    color: ${({theme}) => theme.palette.fontColor};
    display: flex;
    justify-content: space-around;
    font-size: 24px;
    /* margin-right: 32px; */
    font-family: 'ONE-Mobile-Title-bold';
    & li::after{
        content: '|';
        color: #999;
        margin: 0 1rem;
    }
    & li:last-child::after{
        content: '';
    }
`

const S = {
    wrapper,
    logo,
    Nav
}