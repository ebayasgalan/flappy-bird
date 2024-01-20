import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

class Bird extends Component {
  render() {
    const { position } = this.props;
    const birdStyle = {
      position: 'absolute',
      width: 50,
      height: 50,
      left: position[0],
      top: position[1],
    };

    return (
      <Image
        style={birdStyle}
        source={require('./assets/bird.png')}
      />
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      running: true,
      birdPosition: [50, 250], // Initial position of the bird
    };
  }

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[]}
        entities={{
          bird: { position: this.state.birdPosition, renderer: <Bird /> },
        }}
        running={this.state.running}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', 
  },
});

export default App;