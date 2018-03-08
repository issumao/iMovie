/*===============================
* @file: SimplePostcards.js
* @date: 2018-03-08 16:59:26
* @description: 竖状
=================================*/

import React, { Component } from 'react';
import { StyleSheet, PropTypes } from 'react-native';
import FastImage from "react-native-fast-image"
import { TMDB_URL, TMDB_IMG_URL } from '../../product/productConfig';
import {
	Image,
	Button,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
var widthMultipleWith7 = ScreenWidth / 375;

const styles = StyleSheet.create({
	cardContainer: {
		height: 231 * widthMultipleWith7,
		width: 135 * widthMultipleWith7,
		backgroundColor: 'white',
		flexDirection: 'column',
		marginRight: 10,
		borderRadius: 3
	},
	cardImage: {
		width: 135 * widthMultipleWith7,
		height: 184 * widthMultipleWith7,
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3
	},
	cardTitleContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	cardTitle: {
		color: 'black',
		fontSize: 13,
		fontWeight: '500',
		textAlign: 'center',
		paddingHorizontal: 1
	}
});

const SimplePostcards = ({ info, viewMovie }) => (

	<TouchableOpacity activeOpacity={0.8} onPress={viewMovie.bind(this, info.id)}>
		<View style={styles.cardContainer}>
			<FastImage source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }} style={styles.cardImage} />
			<View style={styles.cardTitleContainer}>
				<Text style={styles.cardTitle} numberOfLines={2}>
					{info.title}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

// SimplePostcards.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	viewMovie: PropTypes.func.isRequired
// };

export default SimplePostcards;
