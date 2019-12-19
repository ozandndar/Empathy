import { StyleSheet, Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
	// Containers
	container: {
		flex: 1,
		alignItems: 'center'
	},
	fluidContainer: {
		flex: 1,
		alignItems: 'stretch'
  }
});