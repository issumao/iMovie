// IOC 管理器
import IOCContainer from './IOCContainer';
import { TMDB_URL, TMDB_API_KEY, TMDB_IMG_URL } from "../../product/productConfig";

// 导入具体实现
import * as MovieDB from './Movie/TheMovieDB'

// Movie Fetch IOC Key
export let MovieFetchIOCKey = "MovieFetchProtocol";

// 初始化方式
export function initIOC() {

    IOCContainer.reg(MovieFetchIOCKey, new MovieDB.TheMovieDB(TMDB_URL, TMDB_API_KEY, TMDB_IMG_URL))
    // let a = IOCContainer.ioc2<MovieFetchProtocol>(MovieFetchIOCKey)
}

export default IOCContainer