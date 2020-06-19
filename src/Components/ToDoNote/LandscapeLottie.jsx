import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/17746-landscape.json'

class LandscapeLottie extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={250}
              width={300}
        />
      </div>
    )
  }
}

export default LandscapeLottie