import IOCContainer from './IOCContainer';
import { TMDB_URL, TMDB_API_KEY, TMDB_IMG_URL } from "../../product/productConfig";
// 导入实现
import * as MovieDB from './Movie/TheMovieDB';
// Movie Fetch IOC Key
export let MovieFetchIOC = "MovieFetchProtocol";
// 初始化方式
export function initIOC() {
    IOCContainer.reg(MovieFetchIOC, new MovieDB.TheMovieDB(TMDB_URL, TMDB_API_KEY, TMDB_IMG_URL));
}
export default IOCContainer;
//# sourceMappingURL=IOCManager.js.map