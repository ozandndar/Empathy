import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CarouselPager from 'react-native-carousel-pager';
import Axios from 'axios';
import Loading from '../../components/Loading';
import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-player';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../components/SliderEntry';

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'content',
      contents: []
    };
    Axios.get(
      `http://empati.ozandundar.com/public/contents/rating=${this.props.data[0]}/sub_rating=${this.props
        .data[1]}/key=6553a4bbbde59ff3f3dd73aaa3ac8975`
    )
      .then((response) => {
        console.log(response.data);
        this.setState({ contents: response.data.contents });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {}

  onClickSomething() {
    this.carousel.goToPage(2);
  }

  onSeek = (seek) => {
    this.videoPlayer.seek(seek);
  };
  onPaused = (playerState) => {
    this.setState({
      paused: !this.state.paused,
      playerState
    });
  };
  onReplay = () => {
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };
  onProgress = (data) => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  onLoad = (data) => this.setState({ duration: data.duration, isLoading: false });
  onLoadStart = (data) => this.setState({ isLoading: true });
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  onError = () => alert('Oh! ', error);
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  enterFullScreen = () => {};
  onFullScreen = () => {
    if (this.state.screenType == 'content') this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };

  renderToolbar = (data) => (
    <View>
      <Text style={{color : '#fff', textAlign : 'center'}}> {data} </Text>
    </View>
  );
  onSeeking = (currentTime) => this.setState({ currentTime });

  _renderItem = ({ item, index }) => {
    const { contents } = this.state;
    console.log('video soruce: ' + item.c_video_link)
    return (
      <View style={{ flex: 1, height: '90%' }}>
        <View style={{ paddingVertical: '10%', flex : 1 }}>
          {/* <Text style={styles.title}>{item.c_desc}</Text> */}
          <Video
            onEnd={this.onEnd}
            onLoad={this.onLoad}
            onLoadStart={this.onLoadStart}
            onProgress={this.onProgress}
            paused={this.state.paused}
            ref={(videoPlayer) => (this.videoPlayer = videoPlayer)}
            resizeMode={this.state.screenType}
            onFullScreen={this.state.isFullScreen}
            source={{ uri: item.c_video_link }}
            style={styles.mediaPlayer}
            volume={0.0}
          />
          <MediaControls
            duration={this.state.duration}
            isLoading={this.state.isLoading}
            mainColor="#333"
            onFullScreen={this.onFullScreen}
            onPaused={this.onPaused}
            onReplay={this.onReplay}
            onSeek={this.onSeek}
            onSeeking={this.onSeeking}
            playerState={this.state.playerState}
            progress={this.state.currentTime}
            toolbar={this.renderToolbar(item.c_desc)}
            style={{height : '90%'}}
          />
        </View>
      </View>
    );
  };

  render() {
    const { contents } = this.state;
    console.log('contents:');
    console.log(contents);
    if (contents == null) return <Loading />;
    else
      return (
        <View style={{ flex: 1 }}>
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={this.state.contents}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            style={{ flex: 1 }}
          />
        </View>
      );
  }
}

export default Lessons;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    height : '90%'
  }
});
