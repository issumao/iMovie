
import React, { Component } from 'react';
import axios from "axios";
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from './MovieDetailsStyle';
import ProgressBar from '../component/ProgressBar';
import ActorCard from '../component/ActorCard';
import { TMDB_URL, TMDB_API_KEY, TMDB_IMG_URL } from "../product/productConfig";
import FastImage from "react-native-fast-image"
import defaultImage from "../../image/defaultHeaderImage.png"

import IOC from "../Models/IOC"
// import IOC from "../../Models/IOC"

import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

export default class DetailsScreen extends React.Component {

  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    // 初始化状态
    this.state = {
      // castsTabHeight: null,
      // heightAnim: null,
      // infoTabHeight: null,
      isLoading: true,
      isRefreshing: false,
      movieId: itemId,
      info: null
      // showSimilarMovies: true,
      // trailersTabHeight: null,
      // tab: 0,
      // youtubeVideos: []
    };

    // // bind 是为了 this 的作用域？
    // this._getTabHeight = this._getTabHeight.bind(this);
    // this._onChangeTab = this._onChangeTab.bind(this);
    // this._onContentSizeChange = this._onContentSizeChange.bind(this);
    // this._onRefresh = this._onRefresh.bind(this);
    // this._onScroll = this._onScroll.bind(this);
    // this._viewMovie = this._viewMovie.bind(this);
    // this._openYoutube = this._openYoutube.bind(this);
    // this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    this._retrieveMovieDetails = this._retrieveMovieDetails.bind(this);
    this._goBack = this._goBack.bind(this);
    this._goImage = this._goImage.bind(this);
  }

  componentWillMount() {
    this._retrieveMovieDetails(this.state.movieId)
  }
  static navigationOptions = {
    // 配置样式
    headerStyle: {
      backgroundColor: "transparent",
    },
    headerMode: 'none'
  };

  // _获取详细信息
  _retrieveMovieDetails(movieId) {
  
    IOC.ioc("MovieFetchProtocol").movie(movieId)
      .then(res => {
        this.setState({
          isLoading: false,
          info: res
        })
        console.log('res', res); //eslint-disable-line
      })
      .catch(error => {
        console.log('Movie Details', error); //eslint-disable-line
      });
    // return axios.get(`${TMDB_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&append_to_response=casts,images,videos`)//&language=zh`)
    //   .then(res => {
    //     this.setState({
    //       isLoading: false,
    //       info: res.data
    //     })
    //     console.log('res.data', res.data); //eslint-disable-line
    //   })
    //   .catch(error => {
    //     console.log('Movie Details', error); //eslint-disable-line
    //   });
  }


  _goBack() {
    /* 1. Navigate to the Details route with params */
    this.props.navigation.goBack()
  }

  _goImage(item) {
    this.props.navigation.navigate('imageShowView', {
      images: new Array({ photo: `${TMDB_IMG_URL}/w780/${(item.file_path)}` }),
      // images: `${TMDB_IMG_URL}/w780/${(item.file_path)}`,
    });
  }

  render() {
    // 1
    // return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Details Screen</Text>
    //   </View>
    // );
    // 2
    // return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Details Screen</Text>
    //     <Button
    //       title="Go to Details... again"
    //       onPress={() => this.props.navigation.navigate('Details')}
    //     />
    //   </View>
    // );
    // 3

    const iconBack = <Icon name="ios-arrow-back" size={32} color="white" />;
    const iconStar = <Icon name="md-star" size={16} color="#F5B642" />;
    const iconMovie = <MCIcon name="format-list-bulleted-type" size={16} color="black" />;
    const iconTime = <MCIcon name="timetable" size={16} color="#6638F0" />;
    const { info } = this.state;

    var genresString = this.state.isLoading ? "" : (info.genres.map(item => (
      item.name
    ))).join(' / ')

    return (
      this.state.isLoading ?
        <View style={styles.progressBar}>
          <ProgressBar />

          {/* 返回键 */}
          <View style={styles.icoBackView}>
            <TouchableOpacity activeOpacity={0.7} onPress={this._goBack}>
              <View>
                {iconBack}
              </View>
            </TouchableOpacity>
          </View>
        </View> :
        <View>
          <ScrollView style={styles.container}
            // onScroll={this._onScroll.bind(this)}
            // scrollEventThrottle={100}
            // onContentSizeChange={this._onContentSizeChange}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                // onRefresh={this._onRefresh}
                colors={['#EA0000']}
                tintColor="white"
                title="loading..."
                titleColor="white"
                progressBackgroundColor="white"
              />
            }>
            <View>
              <Swiper
                style={styles.swiper}
                autoplay
                autoplayTimeout={4}
                showsPagination={false}
                height={248}
                loop
                index={5}>
                {
                  info.images.backdrops.length > 0 ?
                    info.images.backdrops.map((item, index) => (
                      <View key={index}>
                        <FastImage
                          source={{ uri: `${TMDB_IMG_URL}/w780/${(item.file_path)}` }}
                          style={styles.imageBackdrop}
                          resizeMode='cover'
                        />
                      </View>
                    )) :
                    new Array(<View key={"defaultHeaderImage"} style={styles.SwiperView}>
                      <FastImage
                        source={require('../../image/defaultHeaderImage.png')}
                        style={styles.imageBackdrop}
                        resizeMode={FastImage.resizeMode.stretch}
                      />
                    </View>)
                }
              </Swiper>
              {/* 内容 */}
              <View style={styles.cardContainer}>
                <FastImage
                  source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }}
                  style={styles.cardImage}
                />
                <View style={styles.cardDetails}>
                  <Text style={styles.cardTitle}>{info.title}</Text>
                  <Text style={styles.cardTagline}>{info.tagline}</Text>
                  <View style={styles.cardGenre}>
                    {iconMovie}
                    <Text key={genresString} style={styles.cardGenreItem}>{genresString}</Text>
                  </View>
                  <View style={styles.cardNumbers}>
                    <View style={styles.cardStar}>
                      {iconStar}
                      <Text style={styles.cardStarRatings}>{info.vote_average}</Text>
                    </View>
                  </View>
                  <View style={styles.cardGenre}>
                    {iconTime}
                    <Text key={"release_date"} style={styles.cardGenreItem}>{info.release_date}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.contentContainer}>
                <View style={styles.listHeading}>
                  <Text style={styles.listHeadingLeft}>概述</Text>
                </View>
                <View style={styles.listTextBackView}>
                  <Text style={styles.listTextLeft}>{info.overview}</Text>
                </View>
              </View>
              <View style={styles.listHeading}>
                <Text style={styles.listHeadingLeft}>演职人员</Text>
              </View>
              <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actorScroll}>
                  {
                    info.casts.cast.map((item, index) => (
                      < ActorCard key={item.cast_id} style={[styles.actorCard, index == 0 && styles.actorCard_left]}
                        title={item.name}
                        content={item.character && `as ${item.character}`}
                        uri={item.profile_path && `${TMDB_IMG_URL}/w185/${item.profile_path}`}
                      />
                    ))
                  }
                </ScrollView>
              </View>
              <View style={styles.listHeading}>
                <Text style={styles.listHeadingLeft}>海报</Text>
              </View>
              {/* 海报 */}
              <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                  {
                    info.images.posters.map((item, index) => (
                      <TouchableOpacity key={index} activeOpacity={0.7} onPress={this._goImage.bind(this, item)}>
                        <View key={index}>
                          <FastImage
                            source={{ uri: `${TMDB_IMG_URL}/w780/${(item.file_path)}` }}
                            style={[styles.cardImage, index == 0 && styles.actorCard_left]} />
                        </View>
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>
              </View>
              {/* <View style={styles.listHeading}>
                <Text style={styles.listHeadingLeft}>预告片</Text>
              </View> */}
            </View>

            {
              info.casts.crew.length > 0 ?
                <View style={styles.lastPadding}>
                  <View style={styles.listHeading}>
                    <Text style={styles.listHeadingLeft}>幕后团队</Text>
                  </View>
                  <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actorScroll}>
                      {

                        info.casts.crew.map((item, index) => (
                          < ActorCard key={item.credit_id} style={[styles.actorCard, index == 0 && styles.actorCard_left]}
                            title={item.name}
                            content={item.department && `as ${item.department}`}
                            uri={item.profile_path && `${TMDB_IMG_URL}/w185/${item.profile_path}`}
                          />
                        ))
                      }
                    </ScrollView>
                  </View></View> : <View></View>
            }
          </ScrollView>

          {/* 返回键 */}
          <View style={styles.icoBackView}>
            <TouchableOpacity activeOpacity={0.7} onPress={this._goBack}>
              <View>
                {iconBack}
              </View>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}