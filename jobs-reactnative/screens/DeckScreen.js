import React, { Component } from 'react';
import { View, Text, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component {
    renderNoMoreCards = () => {
        return (
          <Card title="No more jobs">
              <Button
                  title="Back To Map"
                  large
                  icon={{ name: 'my-location' }}
                  backgroundColor="#03a9f4"
                  onPress={() => this.props.navigation.navigate('map')}
              />
          </Card>
        );
    }

    renderCard = (job) => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };

        return(
            <Card title={job.jobtitle}>
                <View style={{ height: 300}}>
                    <MapView
                        scrollEnabled={false}
                        style={{flex: 1}}
                        cacheEnabled={ Platform.OS === 'android' }
                        initialRegion={initialRegion}
                    >
                    </MapView>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text>
                    {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
                </Text>
            </Card>
        );
    }

    render() {
        return (
            <View>
                <Swipe
                    data={this.props.jobs}
                    renderNoMoreCards={this.renderNoMoreCards}
                    renderCard={this.renderCard}
                    onSwipeRight={job => this.props.likeJob(job)}
                    keyProp="jobkey"
                />
            </View>
        );
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
}

function mapStateToProps(state) {
    return { jobs: state.jobs.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);
