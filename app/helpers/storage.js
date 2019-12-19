// import {
//   AsyncStorage
// } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const storage = {
  async save(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async get(key) {
    try {
      const token = await AsyncStorage.getItem(key);
      if (token !== null) {
        return token;
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async remove(key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

};

export default storage;