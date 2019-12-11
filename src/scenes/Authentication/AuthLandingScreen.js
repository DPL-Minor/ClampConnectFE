import React from "react";
import { Text, Button, View } from 'react-native';
import deviceStorage from '../../Services/deviceStorage';

import { Header } from 'react-native-elements';

import ConnectedPostList from '../../containers/ConnectedPostList'

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
        <ConnectedPostList />

      </View>
    );
  }
}

export default AuthLandingScreen;

