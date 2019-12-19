import React, { Component, Fragment } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, Footer, FooterTab, Button, Icon } from 'native-base';
import { Image, View } from 'react-native';
import Layout from '../../components/Layout';
import {Actions} from 'react-native-router-flux';

export default class Revards extends Component {
  state = {
    revards: [
      {
        text: 'Learned 3 Words!',
        img: require('../../assets/img/revards/3.png')
      },
      {
        text: 'Learned 9 Words!',
        img: require('../../assets/img/revards/9.png')
      },
      {
        text: 'Learned 15 Words!',
        img: require('../../assets/img/revards/15.png')
      },
      {
        text: 'Bronze Medal!',
        img: require('../../assets/img/revards/bronze.png')
      },
      {
        text: 'Bronze Medal - 2!',
        img: require('../../assets/img/revards/bronzeK.png')
      },
      {
        text: 'Silver Medal!',
        img: require('../../assets/img/revards/silver.png')
      },
      {
        text: 'Silver Medal - 2!',
        img: require('../../assets/img/revards/bronzeK.png')
      },
      {
        text: 'Gold Medal!',
        img: require('../../assets/img/revards/gold.png')
      },
      {
        text: 'Gold Medal - 2!',
        img: require('../../assets/img/revards/goldK.png')
      }
    ]
  };

  render() {
    const { revards } = this.state;
    return (
      <Layout>
        <Container>
          <Content style={{ paddingHorizontal: '2%' }}>
            {revards.map((r, i) => (
              <Card key={i}>
                <CardItem>
                  <Body>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Image source={r.img} style={{ width: 50, height: 50, resizeMode: 'stretch', display: 'flex' }} />
                      <Text
                        style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center', marginLeft: '5%' }}
                      >
                        {r.text}
                      </Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            ))}
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical active onPress={() => Actions.home()}>
                <Icon name="home" active/>
                <Text>Home</Text>
              </Button>
              <Button active>
                <Icon active name="navigate" />
                <Text>Revards</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Layout>
    );
  }
}

const LeftComponent = () => {
  return <View />;
};

const CenterComponent = () => {
  return (
    <Fragment>
      <Image
        style={{ width: 85, height: 30, scaleX: 1.5, scaleY: 1.5 }}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png' }}
      />
    </Fragment>
  );
};

const RightComponent = () => {
  return (
    <Fragment>
      <Text style={{ color: 'black', scaleX: 2, paddingRight: 10, scaleY: 1.5, fontWeight: 'bold' }}>☰</Text>
    </Fragment>
  );
};
