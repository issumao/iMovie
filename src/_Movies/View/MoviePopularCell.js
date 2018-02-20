import React, { Component } from 'react';
import { StyleSheet, PropTypes } from 'react-native';
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

const MoviePopularCell = ({ info, viewMovie }) => (
	// <View style={styles.cardContainer}>
	// 	{/* <Image source={{ uri: `${TMDB_IMG_URL}/w780/${(info.backdrop_path || info.poster_path)}` }} style={styles.imageBackdrop} /> */}
	// 	<Image source={{ uri: `https://camo.githubusercontent.com/8707110493dd81543c24a5a411819e2a0b959084/687474703a2f2f692e696d6775722e636f6d2f503463525567442e706e67` }} style={styles.cardImage} />
		
	// </View> onPress={viewMovie.bind(this, info.id)}
    <TouchableOpacity activeOpacity={0.8}>
		<View style={styles.cardContainer}>
			<Image source={{ uri: `https://camo.githubusercontent.com/8707110493dd81543c24a5a411819e2a0b959084/687474703a2f2f692e696d6775722e636f6d2f503463525567442e706e67` }} style={styles.cardImage} />
			<View style={styles.cardTitleContainer}>
				<Text style={styles.cardTitle} numberOfLines={2}>
                    {/* {info.original_title} */}
                    {"你好！"}
				</Text>
			</View>
		</View>
	</TouchableOpacity>
);

// MovieIntroCard.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	viewMovie: PropTypes.func.isRequired
// };

export default MoviePopularCell;