import { MovieListStyles } from "../../Models/IOC/Movie/MovieProtocol";
import IOCManager, { MovieFetchIOCKey } from "../../Models/IOC/IOCManager";
export class MoviesVM {
    constructor() {
        this.nowPlayingMovies = [];
        this.popularMovies = [];
        // 抓取最新电影
        this.fetchNewMoives = (page) => {
            return new Promise((resolve, reject) => {
                IOCManager.get(MovieFetchIOCKey).movieList(MovieListStyles.New, page)
                    .then(res => {
                    this.nowPlayingMovies = res;
                    resolve(res);
                })
                    .catch(error => {
                    reject(error);
                });
            });
        };
        // 抓取流行电影
        this.fetchPopularMovies = (page) => {
            return new Promise((resolve, reject) => {
                IOCManager.get(MovieFetchIOCKey).movieList(MovieListStyles.Popular, page)
                    .then(res => {
                    this.popularMovies = res;
                    resolve(res);
                })
                    .catch(error => {
                    reject(error);
                });
            });
        };
    }
}
export default MoviesVM;
//# sourceMappingURL=MoviesVM.js.map