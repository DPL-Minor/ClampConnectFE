import React from "react";
import { Text, Button, View } from 'react-native';

import { Header } from 'react-native-elements';

class NFCScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NFC screen!</Text>
      </View>
    );
  }
}

const NFC = NFCScreen;

export default NFC;