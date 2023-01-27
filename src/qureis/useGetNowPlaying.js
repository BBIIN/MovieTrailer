import { useInfiniteQuery } from "@tanstack/react-query"
import MovieApi from "../apis/movieApi"
import qureyKey from "../conts/qureyKey"

const useNowPlayingMovieQuery = () => {
    const {data , fetchNextPage, isFetching} = useInfiniteQuery([qureyKey.UPCOMING_MOVIE_LIST],  //쿼리키
         ({pageParam = 1}) => MovieApi.getNowPlayingMovies({params: {page: pageParam}}), // 콜백함수
        { 
            getNextPageParam: (lastPage) => {
                if(lastPage.data.page > 10) 
                return lastPage.data.page + 1;
            },
            onError: (err) => {
                console.error(err)
            }
        }
    )
    return {data,fetchNextPage, isFetching}
}
export default useNowPlayingMovieQuery