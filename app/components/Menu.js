import React from 'react';

import {Text,View} from 'react-native';

class Menu extends React.Component {
  render(){
    return(
      <View style={{display : 'flex'}}>
        <Text style={{flex : 1, textAlign : 'center', fontSize : 14}}>Ana Sayfa</Text>
        <Text>Hakkimizda</Text>
        <Text>Iletisim</Text>
      </View>
    );
  }
}