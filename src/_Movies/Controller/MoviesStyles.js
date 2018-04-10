/*===============================
* @file: MoviesStyles.js
* @date: 2018-03-08 17:27:20
* @description: Movies 样式文件
=================================*/

import {
    Platform,
    StyleSheet,
} from "react-native";

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

export default styles;