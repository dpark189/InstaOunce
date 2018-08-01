import React from 'react';

class SignupImage extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentImage: 0
    // };
    // this.getRandomImageId = this.getRandomImageId.bind(this);
  }

  // getRandomImageId() {
  //   const min = 0;
  //   const max = 5;
  //   if (this.state.currentImage + 1 === max) {
  //     this.setState({currentImage: 0});
  //   } else {
  //     this.setState({currentImage: this.state.currentImage + 1});
  //   }
  //
  // }

  componentDidMount () {
    // this.intervalId = setInterval(this.getRandomImageId, 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.intervalId);
  }

  render () {

    const images = [
      window.signup_image1,
      window.signup_image2,
      window.signup_image3,
      window.signup_image4,
      window.signup_image5
    ];

    const figures = images.map((image, i) => {
      return (
        <figure key={`figure${i}`}
          style={
            {
              backgroundImage: "url(" + image + ")",
              animationDelay: `${3 * (i + 1)}s`,
            }
          }
        ></figure>
      );
    });

    return (
      <div className="signup-image-div">
        {figures}
      </div>
    );
  }
}

export default SignupImage;
