
import IOCContainer, { IOCProtocol } from '../IOCContainer';

// 电影协议
export interface MovieProtocol {

    // id
    id: string;

    // 流派
    genres: Array<string>;
    
    // 语言
    language: string;

    // 标题
    title: string;

    // 简介
    overview: string;

    // 海报
    poster_path: string;

    // 背景图
    backdrop_path: string;

    // 发行日期
    release_date: string;

    // 状态
    state: string;

    // 预告视频
    video: string;

    // 平均投票
    vote_average: number;

    // 总投票
    vote_count: number;

    // 语音
    spoken_languages: object;
}

export interface MovieFetchStatic {

    new(url: string, key:string, imageUrl: string): MovieFetchProtocol
}

// 电影列表的排序
export enum MovieListStyles {
    // 新的
    New = 1,
    // 热门的
    Hot,
    // 高评价的
    HighPraise,
}

// 电影获取 协议
export interface MovieFetchProtocol extends IOCProtocol {

    // movie id
    movie(id: string): Promise<MovieProtocol>

    // movie list
    movieList(style: MovieListStyles, page: number): Promise<Array<MovieProtocol>>
}