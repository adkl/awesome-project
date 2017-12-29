import React from 'react';
import { TextInput, Alert, Text, Button, StyleSheet, View } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onLoginBtnPressed() {
    let loggedIn = false;
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        responseJson.movies.forEach(function (element) {
          if ((this.state.username + this.state.password).toLowerCase() === element.title.toLowerCase()) {
            //this is only for a demonstration purposes
            let { navigate } = this.props.navigation;
            navigate('Home');
            loggedIn = true;
          }
        }, this);
        if (!loggedIn)
          Alert.alert('Wrong username or password!');
      })
      .catch(error => console.error(error));
  }

  render() {
    let { navigate } = this.props.navigation;

    return (
      <View style={viewStyle.mainLayout}>
        <TextInput
          style={viewStyle.inputField}
          onChangeText={(username) => this.setState({ username })}
          placeholder="Username">
        </TextInput>
        <TextInput
          style={viewStyle.inputField}
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}>
        </TextInput>
        <Button title="Login"
          onPress={this.onLoginBtnPressed.bind(this)}>
        </Button>
      </View>
    )
  }
}

const viewStyle = StyleSheet.create({
  mainLayout: {
    margin: 50
  },
  inputField: {
    height: 50
  }
})