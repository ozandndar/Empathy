import React, { Fragment } from 'react';
import Axios from 'axios';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';

import { View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, Badge, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      loading: true
    };
  }

  componentWillMount() {
    Axios.get(`http://empati.ozandundar.com/public/topics/key=6553a4bbbde59ff3f3dd73aaa3ac8975`)
      .then((response) => {
        this.setState({ topics: response.data.topics, loading: response.data.error });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { topics } = this.state;
    console.log(topics);
    if (this.state.loading && topics.length == 0) return <Loading />;
    else
      return (
        <Layout>
          <Content style={{ backgroundColor: '#fff' }}>
            {topics &&
              topics.map((r, i) => {
                return (
                  <TouchableOpacity key={i} style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => Actions.subtopic(r)}>
                    <Image source={{ uri: r.topic.img }} style={{ width: 110, height: 110 }} />
                    <Text>{r.topic.topic_name}</Text>
                    {i + 1 != topics.length && (
                      <View
                        style={{
                          width: 5,
                          height: 40,
                          backgroundColor: '#5f82d4',
                          alignSelf: 'center',
                          marginVertical: '2%'
                        }}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical active>
                <Icon name="home" active />
                <Text>Home</Text>
              </Button>
              <Button active onPress={() => Actions.revards()}>
                <Icon active name="navigate" />
                <Text>Revards</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Layout>
      );
  }
}

export default Home;

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
