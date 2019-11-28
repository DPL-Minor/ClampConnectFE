import { AsyncStorage } from 'react-native';

const deviceStorage = {

  // AsyncStorage functions will go here :)
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('dikke Billen')
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async loadJWT(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log(value);
      return value;
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

};

export default deviceStorage;