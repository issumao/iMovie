import React from 'react';
import FastImage from "react-native-fast-image"
import {
    View,
    StyleSheet,
    propTypes,
    Platform,
    Image,
    Text
} from 'react-native';


export default class ActorCard extends React.Component {

    // ???
    static propTypes = {
        style: View.propTypes.style,
        elementStyle: View.propTypes.style,
    }

    constructor(props) {
        super(props);

        const { style } = props;
        const defaultStyle = style ? StyleSheet.flatten([style]) : { width: 120, height: 60 };

        this.state = {
            // uri: props.uri,
            // title: props.title,
            // content: props.content,

            width: defaultStyle.width,
            height: defaultStyle.height,
        };
    }

    render() {

        var fixStyles = StyleSheet.create({
            container: {
                width: this.state.width,
                height: this.state.height,
            },
            actorContainer: {
                width: this.state.width / 4,
                height: this.state.width / 4,
            },
            actorImage: {
                width: this.state.height / 5 * 4,
                height: this.state.height / 5 * 4,
                borderRadius: this.state.height / 5 * 4 / 2
            },
        })

        return (
            <View style={this.props.style}>
                <View style={[styles.container, fixStyles.container]} backgroundColor='white'>
                    <View style={styles.actorContainer}>
                        {
                            this.props.uri ?
                                <FastImage source={{ uri: this.props.uri }} style={[styles.actorImage, fixStyles.actorImage]} />
                                :
                                <FastImage source={require('../../image/defaultHeaderImage.png')} style={[styles.actorImage, fixStyles.actorImage]} />
                        }
                    </View>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} adjustsFontSizeToFit={true} style={styles.title}>{this.props.title}</Text>
                        <Text numberOfLines={1} adjustsFontSizeToFit={true} style={styles.content}>{this.props.content}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 
    container: {
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    actorContainer: {
        flex: 1,
        // backgroundColor: '#274289',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 3,
        justifyContent: 'center',
        // backgroundColor: '#444444'
    },
    actorImage: {
        // paddingLeft: 16,
        // width: this.state.width / 4,
        // height: this.state.width / 4,
        // borderRadius: this.state.width / 4 / 2
    },
    title: {
        marginLeft: 8,
        fontWeight: "bold",
        marginRight: 8,
        // textAlign: 'center',
        // flex: 1,
    },
    content: {
        paddingLeft: 8,
        // textAlign: 'center',
        // flex: 1,
        // justifyContent: 'center'
    }
});

// export default ActorCard;