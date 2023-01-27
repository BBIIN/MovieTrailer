import { useInfiniteQuery } from "@tanstack/react-query"
import MovieApi from "../apis/movieApi"
import qureyKey from "../conts/qureyKey"

const useUpcomingMovieQuery = () => {
    const {data , fetchNextPage, isFetching} = useInfiniteQuery([qureyKey.UPCOMING_MOVIE_LIST],  //쿼리키
         ({pageParam = 1}) => MovieApi.getUpcomingMovies({params: {page: pageParam}}), // 콜백함수
         {  // 다음 페이지 요청 시 페이지 + 1
            getNextPageParam: (lastPage) => {
            return lastPage.data.page + 1;
            },
            onError: (err) => {
                console.error(err)
            }
        }
    )
    return {data,fetchNextPage, isFetching}
}
export default useUpcomingMovieQuery