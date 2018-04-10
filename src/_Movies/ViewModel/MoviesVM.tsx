
import { MovieProtocol, MovieListStyles, MovieFetchProtocol } from "../../Models/IOC/Movie/MovieProtocol";
import IOCManager, { MovieFetchIOCKey } from "../../Models/IOC/IOCManager";

export class MoviesVM {

    nowPlayingMovies: Array<MovieProtocol> = []
    popularMovies: Array<MovieProtocol> = []

    // 抓取最新电影
    fetchNewMoives = (page: number): Promise<Array<MovieProtocol>> => {

        return new Promise((resolve, reject) => {
            IOCManager.get<MovieFetchProtocol>(MovieFetchIOCKey).movieList(MovieListStyles.New, page)
                .then(res => {
                    this.nowPlayingMovies = res
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                });
        })
    }

    // 抓取流行电影
    fetchPopularMovies = (page: number) => {
        return new Promise((resolve, reject) => {
            IOCManager.get<MovieFetchProtocol>(MovieFetchIOCKey).movieList(MovieListStyles.Popular, page)
                .then(res => {
                    this.popularMovies = res
                    resolve(res)
                })
                .catch(error => {
                    reject(error)
                });
        })
    }
}

export default MoviesVM;