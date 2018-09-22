
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  ViroARScene,
  ViroImage,
  ViroQuad,
  ViroNode,
  ViroMaterials,
  ViroOmniLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroAnimations,
  Viro3DObject,
  ViroSpotLight,
  ViroAmbientLight,
  ViroParticleEmitter,
  ViroSphere,
  ViroVideo,
  ViroFlexView,
  ViroText,
} from 'react-viro';

var createReactClass = require('create-react-class');

var ARPosterDemo = createReactClass({
  getInitialState: function() {
    return {
      loopState:false,
      animationName:"01",
      pauseUpdates : false,
      playAnim: false,
      modelAnim: false,
    };
  },

  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200}/>

        <ViroARImageMarker target={"poster"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>

          <ViroNode position={[0, -.1, 0]} scale={[0,0,0]} rotation={[-90, 0, 0]} dragType="FixedToWorld" onDrag={()=>{}}
            animation={{name:"scaleModel", run:this.state.playAnim,}} >

            <ViroVideo
              position={[.5, -1.1, -7]}
              rotation={[0, 1, 0]}
              paused={this.state.videoPaused}
              loop={true}
              height={2}
              width={4}
              onClick={this._onClickVideo}
              muted={true}
              source={require('./res/SwordCam.mp4')}
              animation={{name : this.state.mainAnimation, run : this.state.runAnimation, loop : false}} />

              <ViroFlexView style={styles.titleContainer}
                position={[.5, 1, -7]} rotation={[0, 1, 0]} height={2} width={4}>
                <ViroFlexView style={styles.rowContainer} >
                  <ViroText style={styles.prodDescriptionText} text="Lady Gaga" />
                  <ViroText style={styles.priceText} text="" />
                </ViroFlexView>
                <ViroText style={styles.prodDescriptionText} text="Album: The Fame Monster" />
                <ViroText style={styles.prodDescriptionText} text="Cheapest Price: $$$" />
              </ViroFlexView>

              <ViroFlexView style={styles.titleContainer}
                position={[.5, -3.2, -7]} rotation={[0, 1, 0]} height={2} width={4}>
                <ViroFlexView style={styles.rowContainer} >
                  <ViroText style={styles.prodDescriptionText} text="Lady Gaga" />
                  <ViroText style={styles.priceText} text="" />
                </ViroFlexView>
                <ViroText style={styles.prodDescriptionText} text="Album: The Fame Monster" />
                <ViroText style={styles.prodDescriptionText} text="Cheapest Price: $$$" />
              </ViroFlexView>


          </ViroNode>

        </ViroARImageMarker>

        <ViroOmniLight
            intensity={300}
            position={[-10, 10, 1]}
            color={"#FFFFFF"}
            attenuationStartDistance={20}
            attenuationEndDistance={30} />

        <ViroOmniLight
            intensity={300}
            position={[10, 10, 1]}
            color={"#FFFFFF"}
            attenuationStartDistance={20}
            attenuationEndDistance={30} />

        <ViroOmniLight
            intensity={300}
            position={[-10, -10, 1]}
            color={"#FFFFFF"}
            attenuationStartDistance={20}
            attenuationEndDistance={30} />

        <ViroOmniLight
            intensity={300}
            position={[10, -10, 1]}
            color={"#FFFFFF"}
            attenuationStartDistance={20}
            attenuationEndDistance={30} />

        <ViroSpotLight
          position={[0, 8, -2]}
          color="#ffffff"
          direction={[0, -1, 0]}
          intensity={50}
          attenuationStartDistance={5}
          attenuationEndDistance={10}
          innerAngle={5}
          outerAngle={20}
          castsShadow={true}
        />

        <ViroQuad
          rotation={[-90, 0, 0]}
          position={[0, -1.6, 0]}
          width={5} height={5}
          arShadowReceiver={true}
          />

      </ViroARScene>
    );
  },

  _onFinish(){
    this.setState({
      animationName : "02",
      loopState: true,
    })
  },

  _onAnchorFound() {
    this.setState({
      pauseUpdates: true,
      playAnim: true,
      modelAnim: true,
    })
  },

  _onModelLoad() {
    setTimeout(()=> {
      this.setState({

      })
    }, 3000);
  },
});

var styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  prodTitleText: {
    fontFamily: 'sans-serif-light',
    fontSize: 30,
    color: '#222222',
    textAlignVertical: 'center',
    textAlign: 'left',
  },
  priceText: {
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    color: '#aa3c3c',
    textAlignVertical: 'center',
    textAlign: 'left',
    flex: 4,
  },
  prodDescriptionText: {
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    color: '#222222',
    textAlignVertical: 'center',
    textAlign: 'left',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'column',
    backgroundColor: "#ffffffdd",
    padding: .2,
  },
  navButtonText: {
    fontFamily: 'sans-serif-light',
    fontSize: 15,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
    flex: 1,
  },
});

ViroARTrackingTargets.createTargets({
  poster : {
    source : require('./res/magicsword.jpg'),
    orientation : "Up",
    physicalWidth : 0.6096 // real world width in meters
  },
});

ViroAnimations.registerAnimations({
    scaleModel:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 1000},
});

module.exports = ARPosterDemo;
