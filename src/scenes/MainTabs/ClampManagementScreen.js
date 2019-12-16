import React from "react";
import { Text, Button, View } from 'react-native';

import { Header } from 'react-native-elements';

class ClampManagementScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Manage Clamps', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          containerStyle={{
            backgroundColor: 'green',
            justifyContent: 'space-around',
          }}
        />
        <Text>Clamp screen!</Text>
      </View>
    );
  }
}

export default ClampManagementScreen;