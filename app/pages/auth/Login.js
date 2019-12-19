import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Axios from 'axios';

import Layout from '../../components/Layout';
import { Form, Item, Input, Button, Text } from 'native-base';
import storage from '../../helpers/storage';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      authanticated: false,
      error: null,
      message: null
    };
  }

  componentDidMount() {
  }

  onSubmit = () => {
    Axios.get(
      `http://empati.ozandundar.com/public/user/e_mail=${this.state.email}/pwd=${this.state
        .password}/key=6553a4bbbde59ff3f3dd73aaa3ac8975`
    )
      .then((response) => {
        console.log(response.data);
        this.setState({ error: response.data.error, message: response.data.message });
        if (!response.data.error) {
          Actions.home();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let secondTextInput;
    console.log(this.state);
    return (
      <KeyboardAwareScrollView>
        <View style={{ paddingHorizontal: '10%' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              style={{ height: 200, resizeMode: 'stretch', width: 200 }}
              source={require('../../assets/img/empati2.png')}
            />
          </View>
          <Form>
            <Item>
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  secondTextInput._root.focus();
                }}
                blurOnSubmit={false}
                onChangeText={(e) => this.setState({ email: e })}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                ref={(input) => {
                  secondTextInput = input;
                }}
                onSubmitEditing={() => {
                  this.onSubmit();
                }}
                onChangeText={(e) => this.setState({ password: e })}
              />
            </Item>
            {this.state.message !== null && <Text style={{color : 'indianred', fontSize : 11}}>{this.state.message}</Text>}
            <View style={{ justifyContent: 'center', marginTop: 30 }}>
              <Button style={{ display: 'flex', alignSelf: 'center' }} primary onPress={() => this.onSubmit()}>
                <Text> Login </Text>
              </Button>
            </View>
          </Form>
          <View style={{ justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ color: 'grey', display: 'flex', alignSelf: 'center' }}>Or</Text>
            <Text
              onPress={() => Actions.register()}
              style={{ color: 'grey', display: 'flex', alignSelf: 'center', marginTop: 20, fontWeight: 'bold' }}
            >
              Register Now!
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
