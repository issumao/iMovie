
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

import MovieIntroCard from '../View/MovieIntroCard';
import MoviePopularCell from '../View/MoviePopularCell';

import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
  Text,
  View
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
var widthMultipleWith7 = ScreenWidth / 375;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		...Platform.select({
			ios: {
				paddingTop: 64
			}
		})
	},
	progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	listHeading: {
		paddingHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
		marginTop: 30
	},
	listHeadingLeft: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18
	},
	listHeadingRight: {
		color: 'white',
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
		flexDirection: 'row'
	},
	browseListItemText: {
		flex: 1,
		color: 'white',
		paddingLeft: 10,
		...Platform.select({
			ios: {
				fontSize: 15,
				fontWeight: '500'
			},
			android: {
				fontSize: 16,
				fontWeight: '100'
			}
		})
	},
	ionsStyle: {
		
	}
});

export default class Movies extends React.Component {
    static navigationOptions = {
        title: '电影',
        // 配置样式
        headerStyle: {
          backgroundColor: '#f44444',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
      
      render() {
				const iconPlay = <Icon name="md-play" size={21} color="#ffffff" style={{ paddingLeft: 3, width: 22 }} />;
				const iconTop = <Icon name="md-trending-up" size={21} color="#ffffff" style={{ width: 22 }} />;
				const iconUp = <Icon name="md-recording" size={21} color="#ffffff" style={{ width: 22 }} />;

        return (
          <ScrollView style={{backgroundColor: '#f44444'}}>
            <Swiper
              autoplay
              autoplayTimeout={4}
              showsPagination={false}
              height={248 * widthMultipleWith7}>
              {new Array(<MovieIntroCard key={""} info={{}} viewMovie={{}}/>,<MovieIntroCard key={""} info={{}} viewMovie={{}}/>)}
            </Swiper>
            <View>
              <View style={styles.listHeading}>
                <Text style={styles.listHeadingLeft}>热门</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {new Array(<MoviePopularCell key={"1"} info={{}} viewMovie={{}}/>,<MoviePopularCell key={"2"} info={{}} viewMovie={{}}/>)}
              </ScrollView>
            </View>
            <View style={styles.browseList}>
						<TouchableOpacity activeOpacity={0.7}>
							<View style={styles.browseListItem}>
								{iconPlay}
								<Text
									style={styles.browseListItemText}>
									{/* onPress={this._viewMoviesList.bind(this, 'now_playing', 'Now Playing')}> */}
									Now Playing
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.7}>
							<View style={styles.browseListItem}>
								{iconTop}
                <Text 
                style={styles.browseListItemText} >
                {/* onPress={this._viewMoviesList.bind(this, 'top_rated', 'Top Rated')}> */}
									Top Rated
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.7}>
							<View style={styles.browseListItem}>
								{iconUp}
								<Text
									style={styles.browseListItemText} >
									{/* onPress={this._viewMoviesList.bind(this, 'upcoming', 'Upcoming')}> */}
									Upcoming
								</Text>
							</View>
						</TouchableOpacity>
					</View>
          </ScrollView>
        );
      }
  };