import * as Service from './Services';
import { MovieProtocol, MovieFetchProtocol } from './MovieProtocol'
import * as MovieDB from './TheMovieDB'
import { TMDB_URL, TMDB_API_KEY, TMDB_IMG_URL } from "../product/productConfig";

export let MovieFetchIOC = "MovieFetchProtocol";

export function initIOC() {

    Service.shared.reg(MovieFetchIOC, new MovieDB.TheMovieDB(TMDB_URL, TMDB_API_KEY, TMDB_IMG_URL))
}

export default Service.shared