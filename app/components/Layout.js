import React, { Fragment } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Layout extends React.Component {
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
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={
          <View style={{ backgroundColor: '#fff', height: '100%' }}>
            <View style={{ flex: 1, backgroundColor: '#ccc' }}>
              {/* <Text>User</Text> */}
            </View>
            <View style={{ flex: 4 }}>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 22,
                  marginVertical: '3%',
                  paddingLeft: '2%',
                  fontWeight: 'bold'
                }}
                onPress={() => Actions.home()}
              >
                Ana Sayfa
              </Text>
              <Text
                style={{
                  textAlign: 'left',
                  fontSize: 22,
                  marginVertical: '3%',
                  paddingLeft: '2%',
                  fontWeight: 'bold'
                }}
                onPress={() => Actions.about()}
              >
                Hakkimizda
              </Text>
            </View>
          </View>
        }
        onClose={() => this.closeDrawer()}
      >
        <Header backgroundColor="#fff">
          <Fragment>
            <Text
              onPress={() => this.openDrawer()}
              style={{ color: 'black', scaleX: 2, paddingLeft: '3%', scaleY: 1.5, fontWeight: 'bold' }}
            >
              ☰
            </Text>
          </Fragment>
          <CenterComponent />
          <LeftComponent />
        </Header>
        {this.props.children}
      </Drawer>
    );
  }
}

export default Layout;

const LeftComponent = () => {
  return <View />;
};

const CenterComponent = () => {
  return (
    <Fragment>
      <Image
        style={{ width: 115, height: 30, scaleX: 1.5, scaleY: 1.5 }}
        source={require('../assets/img/logo.png')}
      />
    </Fragment>
  );
};

const RightComponent = () => {
  return (
    <Fragment>
      <Text
        onPress={() => closeDrawer()}
        style={{ color: 'black', scaleX: 2, paddingRight: 10, scaleY: 1.5, fontWeight: 'bold' }}
      >
        ☰
      </Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
