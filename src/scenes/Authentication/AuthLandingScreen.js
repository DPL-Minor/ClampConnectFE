import React from "react";
import { Text, Button, View } from 'react-native';
import deviceStorage from '../../Services/deviceStorage';

import { Header } from 'react-native-elements';

import ConnectedPostList from '../../containers/ConnectedPostList'
import ConnectedLoading from '../../containers/ConnectedLoading'
import ConnectedErrorMessage from '../../containers/ConnectedErrorMessage'

import { fetchUser, createUser, login } from '../../redux/actions'

import { connectionState } from '../../redux/actions'
import NetInfo from "@react-native-community/netinfo"

import store from '../../redux/store'

class AuthLandingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          containerStyle={{
            backgroundColor: 'green',
            justifyContent: 'space-around',
          }}
        />
        <Text>Authentication Landing screen!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('App')}
          title="Sign In"
        />

        <Button
          onPress={() => deviceStorage.saveItem('key', 'value')}
          title="Store token"
        />

        <Button
          onPress={() => deviceStorage.loadJWT('key')}
          title="Retrieve token"
        />
        <Button
          onPress={() => store.dispatch(fetchUser())}
          title="fetch User"
        />
        <Button
          onPress={() => store.dispatch(createUser('wisse', 'voortman'))}
          title="create User"
        />
        <Button
          onPress={() => store.dispatch(login('wisse', 'voortman'))}
          title="login User"
        />
        <Button
          onPress={() => console.log('initial state:', store.getState())}
          title="Log State"
        />
        <Button
          onPress={() => store.dispatch(connectionState(NetInfo.fetch().then(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
          })))}
          title="test NetInfo"
        />
        <ConnectedPostList />
        <ConnectedLoading />
        <ConnectedErrorMessage />

      </View>
    );
  }
}

export default AuthLandingScreen;

