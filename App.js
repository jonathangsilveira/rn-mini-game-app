import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import PrimaryButton from './components/PrimaryButton';

export default function App() {
  return (<StartGameScreen />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
