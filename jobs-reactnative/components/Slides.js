import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(idx) {
        if (idx === this.props.data.length - 1) {
            return (
                <Button
                    title="Onwards!"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            )
        }
    }
    renderSlides() {
        return this.props.data.map((slide, idx) => {
            return (
                <View
                    key={idx}
                    style={[styles.slideStyle, {backgroundColor: slide.color}]}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.renderLastSlide(idx)}
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1}}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: 'white'
    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15
    }
}

export default Slides;