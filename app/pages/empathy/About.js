import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Accordion, Drawer, Button, Text } from 'native-base';
import Layout from '../../components/Layout';

const dataArray = [
  {
    title: 'Empathy',
    content:
      'The aim of the application we want to do is to teach the Turkish Sign Language. We want to create awareness for hearing impaired people. '
  },
  {
    title: 'Purpose',
    content:
      'The purpose of choosing this idea is to make the lives of hearing-impaired people easier and we want to make multiple sign languages can be added. '
  },
  {
    title: 'Summary',
    content:
      'Thus we will have a chance to help that all hearing impaired people in the world. We planning to teach sign language through videos.'
  }
];

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    return (
      <Layout>
        <Container>
          <Content padder>
            <Accordion dataArray={dataArray} expanded={0} />
          </Content>
        </Container>
      </Layout>
    );
  }
}
