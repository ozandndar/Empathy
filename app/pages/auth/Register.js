import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Layout from '../../components/Layout';
import { Form, Item, Input, Button, Text } from 'native-base';
import Axios from 'axios';

export class Register extends React.Component {
  state = {
    name: null,
    surname: null,
    password: null,
    password_2: null,
    email: null,
    error: null,
    message: null
  };

  onSubmit = () => {
    console.log(this.state);

    Axios.post(`http://empati.ozandundar.com/public/register/key=6553a4bbbde59ff3f3dd73aaa3ac8975`, {
      name: this.state.name,
      surname: this.state.surname,
      password: this.state.password,
      e_mail: this.state.email
    })
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
                placeholder="Name"
                onChangeText={(e) => this.setState({ name: e })}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  secondTextInput._root.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
            <Item>
              <Input
                placeholder="Surname"
                onChangeText={(e) => this.setState({ surname: e })}
                ref={(input) => {
                  secondTextInput = input;
                }}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  thirdTextInput._root.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(e) => this.setState({ password: e })}
                ref={(input) => {
                  thirdTextInput = input;
                }}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  forthTextInput._root.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password Again"
                secureTextEntry={true}
                onChangeText={(e) => this.setState({ password_2: e })}
                ref={(input) => {
                  forthTextInput = input;
                }}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  fifthTextInput._root.focus();
                }}
                blurOnSubmit={false}
              />
            </Item>
            <Item>
              <Input
                placeholder="E-mail"
                onChangeText={(e) => this.setState({ email: e })}
                ref={(input) => {
                  fifthTextInput = input;
                }}
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  this.onSubmit();
                }}
                blurOnSubmit={false}
              />
            </Item>
            <View>
              <Text style={{ color: '#888', fontSize: 11 }}>
                *Your password should have at least one uppercase and one number
              </Text>
            </View>
            {this.state.message !== null && (
              <Text style={{ color: 'indianred', fontSize: 11 }}>{this.state.message}</Text>
            )}

            <View style={{ justifyContent: 'center', marginTop: 30 }}>
              <Button primary style={{ display: 'flex', alignSelf: 'center' }} onPress={() => this.onSubmit()}>
                <Text> Sign Up! </Text>
              </Button>
            </View>
          </Form>
          <View style={{ justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ color: 'grey', display: 'flex', alignSelf: 'center' }}>Do you already have an account?</Text>
            <Text
              onPress={() => Actions.login()}
              style={{
                color: 'grey',
                display: 'flex',
                alignSelf: 'center',
                marginTop: 20,
                marginBottom: 50,
                fontWeight: 'bold'
              }}
            >
              Login Now!
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
