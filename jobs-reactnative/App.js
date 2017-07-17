import Expo, { Notifications } from 'expo';
import React from 'react';
import {StyleSheet, Text, View, Platform, StatusBar, Alert} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import registerForNotifications from './services/push_notifications';
// import RootNavigator from "./navigation/RootNavigation";
import AuthTabNavigator from "./navigation/AuthTabNavigator";

class App extends React.Component {

    componentDidMount() {
        registerForNotifications();
        Notifications.addListener((notification) => {
            const { data: {text}, origin } = notification;
            // const text = notification.data.text;
            // const origin = notification.origin;
            if (origin === 'received' && text) {
                Alert.alert(
                    'New Push Notification',
                    text,
                    [{text: 'Ok.'}]
                );
            }
        });
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    {Platform.OS === 'android' &&
                    <View style={styles.statusBarUnderlay}/>}
                    <AuthTabNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});

export default App;