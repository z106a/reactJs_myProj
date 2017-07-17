import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import * as actions from '../actions';

class MapScreen extends Component {

    state = {
        mapLoaded: false,
        region: {
            latitude: 37,
            longitude: -122,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
        }
    }

    componentDidMount() {
        this.setState({mapLoaded: true});
    }

    onRegionChangeComplete = (region) => {
        this.setState({region});
    }

    onButtonPress = () => {
        this.props.fetchJobs(this.state.region, () => {
            this.props.navigation.navigate('deck');
        });
    }

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{flex:2, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        large
                        title="Search this area"
                        backgroundColor="#009688"
                        icon={{name: 'search'}}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        );
    }
}

export default connect(null, actions)(MapScreen);

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
};