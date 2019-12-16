import React from "react";
import { Text, Button, View } from 'react-native';

import { Header } from 'react-native-elements';

class NFCScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'NFC screen', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          containerStyle={{
            backgroundColor: 'green',
            justifyContent: 'space-around',
          }}
        />
        <Text>NFC screen!</Text>
      </View>
    );
  }
}

export default NFCScreen;