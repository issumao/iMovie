import React from 'react';
import { Modal, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import FastImage from "react-native-fast-image"
import PhotoBrowser from 'react-native-photo-browser';

import {
    View,
    StyleSheet,
    propTypes,
    Platform,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import ProgressBar from '../component/ProgressBar';

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    icoBackView: {
        position: 'absolute',
        top: 8 + 20,
        left: 16,
        width: 80,
        borderRadius: 3
    },
    view: {
        backgroundColor: "#333333"//"transparent",
    },
    progressBar: {
        backgroundColor: '#f44444',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackdrop: {
        // flex: 1,
        height: 248,
        // backgroundColor: 'black',
        // flex: 1,
        width
    },
});

export default class imageShowView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // modalVisible: true,
            isLoading: true,
        };
        this._goBack = this._goBack.bind(this);
    }
    _goBack() {
        /* 1. Navigate to the Details route with params */

        this.props.navigation.goBack()
        this.setState({ modalVisible: false });
        // this.setModalVisible(!this.state.modalVisible)
    }

    render() {

        const { params } = this.props.navigation.state;
        const images = params ? params.images : null;

        const iconBack = <Icon name="ios-arrow-back" size={32} color="white" />;
        return (
            <View style={styles.progressBar}>
                <PhotoBrowser
                    onBack={this._goBack}
                    mediaList={images}
                    // initialIndex={index}
                    displayTopBar={false}
                    enableGrid={false}
                // displayActionButton={true}
                />
                {/* 返回键 */}
                <View style={styles.icoBackView}>
                    <TouchableOpacity activeOpacity={0.7} onPress={this._goBack}>
                        <View>
                            {iconBack}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}