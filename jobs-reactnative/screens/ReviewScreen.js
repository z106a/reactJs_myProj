import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewScreen extends Component {
    static navigationOptions = props => {
        const { navigation } = props;
        return {
            title: 'Review Jobs',
            headerRight: (
                <Button
                    title="Settings"
                    onPress={() => navigation.navigate('settings')}
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0, 122, 255, 1)"
                />
            ),
            headerStyle: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        }
    }

    renderLikedJobs() {
        return this.props.likedJobs.map(job => {
            const {company, url, formattedRelativeTime, longitude, latitude, jobkey, jobtitle} = job;
            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };
            return (
                <Card title={jobtitle} key={jobkey}>
                    <View style={{height: 200}}>
                        <MapView
                            style={{flex: 1}}
                            cacheEnabled={ Platform.OS === 'android' }
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{company}</Text>
                            <Text style={styles.italics}>{formattedRelativeTime}</Text>
                        </View>
                        <Button title="Apply Now!" onPress={() => Linking.openURL(url)} backgroundColor="#03a9f4" />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}

            </ScrollView>
        );
    }
}

const styles = {
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
}

function mapStateToProps(state) {
    return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen);
