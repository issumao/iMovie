/*===============================
* @file: MovieHeaderCell.js
* @date: 2018-03-08 16:55:18
* @description: 电影头部单元视图
=================================*/

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from "react-native-fast-image"
import { StyleSheet, PropTypes } from 'react-native';
import { TMDB_URL, TMDB_IMG_URL } from '../../product/productConfig';FastImage
import {
	Image,
	Button,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

const styles = StyleSheet.create({
	// 遮罩
	viewBackdrop: {
		// flex: 1,
		height: 248,
		backgroundColor: 'black',
		opacity: 0.7,
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0
	},
	// 背景图片
	imageBackdrop: {
		// flex: 1,
		height: 248,
		backgroundColor: 'orange'
	},
	// 信息视图
	cardContainer: {
		position: 'absolute',
		top: 32,
		right: 16,
		left: 16,
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	// 小图片
	cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
	// 详情
	cardDetails: {
		paddingLeft: 10,
		flex: 1,
		height: 184,
		justifyContent: 'space-around',
	},
	cardTitle: {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		// paddingTop: 10
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardDescription: {
		color: '#f7f7f7',
		fontSize: 13,
		// marginTop: 5
	},
	cardNumbers: {
		flexDirection: 'row',
		// marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
	viewButton: {
		justifyContent: 'center',
		padding: 10,
		borderRadius: 3,
		backgroundColor: '#EA0000',
		// width: 20,
		height: 30,
		marginTop: 10,
		// alignContent: 'center',
	},
	viewButtonText: {
		color: 'white',
		textAlign: 'center',
	}
});

const iconStar = (<Icon name="md-star" size={16} color="#F5B642" />);

const MovieHeaderCell = ({ info, viewMovie }) => (
	<View style={{ backgroundColor: '#800080' }}>
		<Image source={{ uri: `${TMDB_IMG_URL}/w780/${(info.backdrop_path || info.poster_path)}` }} style={styles.imageBackdrop} />
		<View style={styles.viewBackdrop} />
		<View style={styles.cardContainer}>
			<FastImage source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }} style={styles.cardImage} />

			<View style={styles.cardDetails}>
				<Text style={styles.cardTitle} numberOfLines={2}>
					{info.title}
				</Text>
				<View style={styles.cardGenre}>
					<Text style={styles.cardGenreItem}>{'上映时间：' + info.release_date}</Text>
				</View>
				<View style={styles.cardNumbers}>
					<View style={styles.cardStar}>
						{iconStar}
						<Text style={styles.cardStarRatings}>{'评分：' + info.vote_average}</Text>
					</View>
					<Text style={styles.cardRunningHours} />
				</View>
				<Text style={styles.cardDescription} numberOfLines={3}>
					{info.overview}
				</Text>
				<TouchableOpacity activeOpacity={0.9} onPress={viewMovie.bind(this, info.id)}>
					<View style={styles.viewButton}>
						<Text style={styles.viewButtonText}>详情</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

// MovieHeaderCell.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	viewMovie: PropTypes.func.isRequired
// };

export default MovieHeaderCell;