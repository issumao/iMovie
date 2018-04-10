import axios from "axios";
import {
  MovieProtocol,
  MovieFetchProtocol,
  MovieListStyles
} from "./MovieProtocol";

// The Movie DB 类
export class TimeMovieDB implements MovieFetchProtocol {
  url: string;
  imageUrl: string;
  apiKey: string;

  constructor(url: string, key: string, imageUrl: string) {
    this.url = url;
    this.apiKey = key;
    this.imageUrl = imageUrl;
  }

  movie(id: string): Promise<MovieProtocol> {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${this.url}/movie/${id}?api_key=${
            this.apiKey
          }&append_to_response=casts,images,videos`
        ) //&language=zh`)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  movieList(
    style: MovieListStyles,
    page: number
  ): Promise<Array<MovieProtocol>> {
    var styleString: string = "now_playing";
    switch (style) {
      case MovieListStyles.New:
        break;
      case MovieListStyles.Popular:
        styleString = "popular";
        break;
      case MovieListStyles.HighPraise:
        break;
    }
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${this.url}/movie/${styleString}?api_key=${
            this.apiKey
          }&page=${page}&language=zh`
        ) //&region=CN`)//&language=zh`)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
