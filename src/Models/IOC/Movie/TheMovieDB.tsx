import axios from 'axios';
import { MovieProtocol, MovieFetchProtocol } from './MovieProtocol'

// The Movie DB 类
export class TheMovieDB implements MovieFetchProtocol {

    url: string;
    imageUrl: string;
    apiKey: string;

    constructor(url: string, key: string, imageUrl: string) {
        this.url = url
        this.apiKey = key
        this.imageUrl = imageUrl

    }

    movie(id: string): Promise<MovieProtocol> {
        return new Promise((resolve, reject) => {

            axios.get(`${this.url}/movie/${id}?api_key=${this.apiKey}&append_to_response=casts,images,videos`)//&language=zh`)
                .then(res => {
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                }); return
        })
    }

    movieList(page: number): Promise<Array<MovieProtocol>> {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/movie/now_playing?api_key=${this.apiKey}&page=${page}&language=zh`)//&region=CN`)//&language=zh`)
                .then(res => {
                    resolve(res.data)
                })
                .catch(error => {
                    reject(error)
                }); return
        })
    }
}