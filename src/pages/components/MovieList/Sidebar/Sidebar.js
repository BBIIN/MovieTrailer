import styled from "styled-components";
import '../../../../styles/index.css'

function MovieListSidebar() {
    return(
        <S.Wrapper>
            <S.List>
                <li>HOME</li>
                <li>POPULAR</li>
                <li>NOW</li>
                <li>UPCOMMING</li>
            </S.List>
        </S.Wrapper>
    )
}
export default MovieListSidebar;

const Wrapper = styled.div`
    position: sticky;
    width: 340px;
    height: 100vh;
    top: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.palette.fontColor};
`;

const List = styled.div`
    padding-top: 50px;
    & li {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.xLarge};
        padding: 32px 0;
        cursor: pointer;
        list-style: none;
        font-family: 'ONE-Mobile-Title';
    }
`;

const S = {
    Wrapper,
    List
};
