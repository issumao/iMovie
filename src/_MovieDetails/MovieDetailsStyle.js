import { StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        paddingTop: 10,
        fontSize: 12,
        fontWeight: 'bold'
    },
    underlineStyle: {
        backgroundColor: '#EA0000'
    },
    tabBar: {
        backgroundColor: '#131313'
    },
    contentContainer: {
        flex: 1,
        marginTop: 157
    },
    progressBar: {
        backgroundColor: '#f44444',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#f44444'
    },
    swiper: {
        // backgroundColor: '#111111'
        // position: 'absolute',
        // flex: 1
    },
    linearGradient: {
        top: 0,
        left: 0,
        right: 0,
        height: 248,
        position: 'absolute'
    },
    imageBackdrop: {
        // flex: 1,
        height: 248,
        backgroundColor: 'black',
        // flex: 1,
        width
    },
    cardContainer: {
        flex: 1,
        position: 'absolute',
        top: 200,
        right: 16,
        left: 16,
        flexDirection: 'row'
    },
    cardImage: {
        height: 184,
        width: 135,
        borderRadius: 3
    },
    cardDetails: {
        paddingLeft: 10,
        flex: 1,
        paddingTop: 50
    },
    cardTitle: {
        color: 'white',
        fontSize: 19,
        fontWeight: '500',
        paddingTop: 10
    },
    cardTagline: {
        color: 'white',
        fontSize: 15
    },
    cardGenre: {
        flexDirection: 'row'
    },
    cardGenreItem: {
        textAlign: 'left',
        fontSize: 11,
        marginRight: 5,
        color: 'white'
    },
    cardNumbers: {
        flexDirection: 'row',
        marginTop: 5
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
    icoBackView: {
        position: 'absolute',
        top: 8 + 20,
        left: 16,
        width: 80,
        borderRadius: 3
    },
    listHeading: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 30
    },
    listHeadingLeft: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    listTextLeft: {
        paddingHorizontal: 16,
        color: "black",
        fontSize: 14
    },
    listTextBackView: {
        marginLeft: 16,
        marginRight: 16,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "white",
        borderRadius: 4, 
    },
    actorScroll: {
        paddingBottom: 16
        // marginBottom: 16,
        // paddingLeft: 16,
        // marginRight: 16,
        // paddingHorizontal: 16,
    },
    actorCard_left: {
        marginLeft: 16,
    },
    actorCard: {
        width: 220,
        height: 50,
        marginRight: 16,
    },

    cardImage: {
        width: 135,
        height: 184,
        borderRadius: 4, 
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        marginRight: 16,
        backgroundColor: 'gray',
    },
    SwiperView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    }
});

export default styles;
