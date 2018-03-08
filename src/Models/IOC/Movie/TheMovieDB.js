import axios from 'axios';
import { MovieListStyles } from './MovieProtocol';
// The Movie DB 类
export class TheMovieDB {
    constructor(url, key, imageUrl) {
        this.url = url;
        this.apiKey = key;
        this.imageUrl = imageUrl;
    }
    movie(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/movie/${id}?api_key=${this.apiKey}&append_to_response=casts,images,videos`) //&language=zh`)
                .then(res => {
                resolve(res.data);
            })
                .catch(error => {
                reject(error);
            });
            return;
        });
    }
    movieList(style, page) {
        var styleString = 'now_playing';
        switch (style) {
            case MovieListStyles.New:
                break;
            case MovieListStyles.Popular:
                styleString = 'popular';
                break;
            case MovieListStyles.HighPraise:
                break;
        }
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/movie/${styleString}?api_key=${this.apiKey}&page=${page}&language=zh`) //&region=CN`)//&language=zh`)
                .then(res => {
                resolve(res.data);
            })
                .catch(error => {
                reject(error);
            });
            return;
        });
    }
}
//# sourceMappingURL=TheMovieDB.js.map