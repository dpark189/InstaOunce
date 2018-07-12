import React from 'react';

class SignupImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    };
    this.getRandomImageId = this.getRandomImageId.bind(this);
  }

  getRandomImageId() {

    const min = 0;
    const max = 5;
    this.setState({currentImage: Math.floor(Math.random() * (max - min)) + min });
  }

  componentDidMount () {
    this.intervalId = setInterval(this.getRandomImageId, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render () {

    const images = [
      window.signup_image1,
      window.signup_image2,
      window.signup_image3,
      window.signup_image4,
      window.signup_image5
    ];

    return (
        <img id="rotatingImg" src={images[this.state.currentImage]} />
    );
  }
}

export default SignupImage;
