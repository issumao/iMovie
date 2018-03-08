/*===============================
file: Movies.js
date: 2018-03-08 16:45:49
description: 电影首页
=================================*/

import React, { Component } from "react";
// 第三方控件
import Swiper from "react-native-swiper";
import Icon from "react-native-vector-icons/Ionicons";
import FastImage from "react-native-fast-image"

// 子视图
import MovieHeaderCell from "../View/MovieHeaderCell";
import SimplePostcards from "../View/SimplePostcards";

// IOC 业务
import IOC, { MovieFetchIOCKey } from "../../Models/IOC/IOCManager"

import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Button,
  Text,
  View,
} from "react-native";
import { MovieListStyles } from "../../Models/IOC/Movie/MovieProtocol";

var Dimensions = require("Dimensions");
var ScreenWidth = Dimensions.get("window").width;
var ScreenHeight = Dimensions.get("window").height;
var ScreenScale = Dimensions.get("window").scale;
var widthMultipleWith7 = ScreenWidth / 375;
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    ...Platform.select({
      ios: {
        paddingTop: 64
      }
    })
  },
  progressBar: {
    backgroundColor: "#0a0a0a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  listHeading: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  listHeadingLeft: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  listHeadingRight: {
    color: "white",
    ...Platform.select({
      ios: {
        fontSize: 15
      },
      android: {
        fontSize: 16
      }
    })
  },
  browseList: {
    marginTop: 30,
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        marginBottom: 60
      },
      android: {
        marginBottom: 30
      }
    })
  },
  browseListItem: {
    ...Platform.select({
      ios: {
        paddingVertical: 8
      },
      android: {
        paddingVertical: 10
      }
    }),
    flexDirection: "row",
    alignItems: 'center',
  },
  browseListItemText: {
    flex: 1,
    color: "white",
    paddingLeft: 10,
    ...Platform.select({
      ios: {
        fontSize: 15,
        fontWeight: "500"
      },
      android: {
        fontSize: 16,
        fontWeight: "100"
      }
    }),
  },
  ionsStyle: {},
  imageBackdrop: {
    // flex: 1,
    height: 248,
    backgroundColor: 'black',
    // flex: 1,
    width
  },
});

export default class Movies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isRefreshing: false,
      popularMovies: { results: new Array() },
      nowPlayingMovies: { results: new Array() }
    };

    this._viewMovie = this._viewMovie.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this.retrievePopularMovies = this.retrievePopularMovies.bind(this);
    // this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  componentWillMount() {
    this._retrieveMovies();
  }

  static navigationOptions = {
    title: "电影",
    // 配置样式
    headerStyle: {
      backgroundColor: "#f44444"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  retrievePopularMovies(page) {

    return IOC.get(MovieFetchIOCKey).movieList(MovieListStyles.Popular, page)
      .then(res => {
        this.setState({
          isRefreshing: false,
          popularMovies: res
        })
        console.log('res', res); //eslint-disable-line
      })
      .catch(error => {
        console.log("Popular", error); //eslint-disable-line
      });
  }

  retrieveNowPlayingMovies(page) {

    return IOC.get(MovieFetchIOCKey).movieList(MovieListStyles.New, page)
      .then(res => {
        this.setState({
          isRefreshing: false,
          nowPlayingMovies: res
        })
        console.log('res', res); //eslint-disable-line
      })
      .catch(error => {
        console.log('Movie Details', error); //eslint-disable-line
      });
  }

  _retrieveMovies(isRefreshed) {
    // this.props.actions.retrieveNowPlayingMovies();
    // this.props.actions.retrievePopularMovies();
    this.retrievePopularMovies(1);
    this.retrieveNowPlayingMovies(1);
    // if (isRefreshed && this.setState({ isRefreshing: false }));
  }

  _onRefresh() {
    this.setState({ isRefreshing: true });
    // this._retrieveMovies('isRefreshed');
  }

  _viewMovie(movieId) {
    /* 1. Navigate to the Details route with params */
    this.props.navigation.navigate('MovieDetails', {
      itemId: movieId,
    });
  }


  render() {
    const { nowPlayingMovies, popularMovies } = this.state;
    const iconPlay = (
      <Icon
        name="md-play"
        size={21}
        color="#ffffff"
        style={{ paddingLeft: 3, width: 22 }}
      />
    );
    const iconTop = (
      <Icon
        name="md-trending-up"
        size={21}
        color="#ffffff"
        style={{ width: 22 }}
      />
    );
    const iconUp = (
      <Icon
        name="md-recording"
        size={21}
        color="#ffffff"
        style={{ width: 22 }}
      />
    );

    return (
      <ScrollView
        style={{ backgroundColor: "#f44444" }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            colors={["#EA0000"]}
            tintColor="white"
            title="loading..."
            titleColor="white"
            progressBackgroundColor="white"
          />
        }
      >
        <Swiper
          autoplay
          autoplayTimeout={4}
          showsPagination={false}
          height={248 * widthMultipleWith7}
        >
          {/* {nowPlayingMovies.results.map(info => (
            <MovieHeaderCell
              key={info.id}
              info={info}
              viewMovie={this._viewMovie}
            />
          ))} */}
          {
            nowPlayingMovies.results.length > 0 ?
              nowPlayingMovies.results.map(info => (
                <MovieHeaderCell
                  key={info.id}
                  info={info}
                  viewMovie={this._viewMovie}
                />
              )) :
              new Array(<View key={"defaultHeaderImage"} >
                <FastImage
                  source={require('../../../image/defaultHeaderImage.png')}
                  style={styles.imageBackdrop}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </View>)
          }
        </Swiper>
        <View>
          <View style={styles.listHeading}>
            <Text style={styles.listHeadingLeft}>当前热门</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularMovies.results.map(info => (
              <SimplePostcards
                key={info.id}
                info={info}
                viewMovie={this._viewMovie}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.browseList}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.browseListItem}>
              {iconPlay}
              <Text style={styles.browseListItemText}>
                {/* onPress={this._viewMoviesList.bind(this, 'now_playing', 'Now Playing')}> */}
                {/* Now Playing */}
                当前院线
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.browseListItem}>
              {iconTop}
              <Text style={styles.browseListItemText}>
                {/* onPress={this._viewMoviesList.bind(this, 'top_rated', 'Top Rated')}> */}
                {/* Top Rated */}
                最受好评的
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.browseListItem}>
              {iconUp}
              <Text style={styles.browseListItemText}>
                {/* onPress={this._viewMoviesList.bind(this, 'upcoming', 'Upcoming')}> */}
                {/* Upcoming */}
                即将上映的
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// Movies.propTypes = {
// 	// actions: PropTypes.object.isRequired,
// 	// nowPlayingMovies: PropTypes.object.isRequired,
// 	movieData: PropTypes.object.isRequired,
// 	// navigator: PropTypes.object
// };
