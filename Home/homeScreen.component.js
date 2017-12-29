import React from 'react';
import {
  Alert,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Platform
} from 'react-native';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [
        { key: 'Kevin' },
        { key: 'Devin' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' }
      ]
    };

  }

  static navigationOptions = {
    title: "Home"
  };

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
          renderItem={({ item }) =>
            <Text style={styles.item}>{item.key}</Text>
          } >

        </FlatList>
      </View >);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})