import React, { Component } from 'react';
import { StyleSheet, PropTypes } from 'react-native';
import { TMDB_URL, TMDB_IMG_URL} from '../../product/productConfig';
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
		width: 135,
		height: 184,
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

const MovieIntroCard = ({ info, viewMovie }) => (

	<TouchableOpacity activeOpacity={0.8}>
		<View style={styles.cardContainer}>
			<Image source={{ uri: `${TMDB_IMG_URL}/w185/${info.poster_path}` }} style={styles.cardImage} />
			<View style={styles.cardTitleContainer}>
				<Text style={styles.cardTitle} numberOfLines={2}>
					{info.title}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

// MovieIntroCard.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	viewMovie: PropTypes.func.isRequired
// };

export default MovieIntroCard;
