import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

class SubTopic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { topic } = this.props;
    console.log(topic.sub_topics);
    return (
      <View>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: topic.img }} style={{ width: 110, height: 110 }} />
          <Text>{topic.topic_name}</Text>
        </TouchableOpacity>
        {this.props.topic.sub_topics.map((sub, i) => {
          return (
            <Card key={i} >
              <CardItem header button onPress={() => Actions.lessons([sub.rating,sub.sub_rating])}>
                <Text>{sub.st_name}</Text>
              </CardItem>
            </Card>
          );
        })}
      </View>
    );
  }
}

export default SubTopic;
