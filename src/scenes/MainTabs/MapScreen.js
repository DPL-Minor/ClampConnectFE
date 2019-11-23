import React from "react";
import { Text, Button, View } from 'react-native';

import { Header } from 'react-native-elements';

class MapScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>map screen!</Text>
      </View>
    );
  }
}

const map = MapScreen;

export default map;