import React from 'react';

class ImageSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      image_urls: props.images
    };
    this.incrementSlide = this.incrementSlide.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
  }

  componentDidMount(){
    if (this.state.image_urls.length > 0){
      this.refs[`images${this.state.index}`].style.display = "flex";
    }
  }

  // componentDidUpdate(prevprops, prevState) {
  //   if (this.state.index !== prevState.index) {
  //
  //     this.refs[`images${prevState.index}`].style.display = "none";
  //     this.refs[`images${this.state.index}`].style.display = "flex";
  //   }
  // }

  componentWillReceiveProps(newProps) {
    this.setState({image_urls: newProps.images});
  }

  incrementSlide(n) {
    const that = this;
    const boundN = n;
    return () => {
      debugger
      that.refs[`images${that.state.index}`].style.display = "none";
      if ((that.state.index + boundN) <= (that.state.image_urls.length - 1)){
        that.setState({index: that.state.index += boundN});
        that.refs[`images${that.state.index}`].style.display = "flex";
      } else {
        that.setState({index: 0});
        that.refs[`images${that.state.index}`].style.display = "flex";
      }
    };
  }

  currentSlide(n) {

    const that = this;
    const boundN = n;
    return () => {
      that.refs[`images${that.state.index}`].style.display = "none";
      that.setState({index: boundN});
      that.refs[`images${that.state.index}`].style.display = "flex";
    };
  }

  render() {
    const dots = [];
    const mySlides = this.state.image_urls.map( (url, i) => {
      let imageDisp = "none";
      let dotClass = "far";
      if (i === this.state.index) {
        imageDisp = "flex";
        dotClass = "fas";
      }
      dots.push(<span ref={`dots${i}`} key={i} className="carousel-dot" onClick={this.currentSlide(i)}><i className={` fa-circle ${dotClass}`}></i></span>);
      return (
        <img ref={`images${i}`} key={i} className="mySlides" src={url} style={{display:`${imageDisp}`}}/>
      );
    });
    return(
      <div className="image-carousel">
        {mySlides}
        <div className="image-carousel-nav">
          <div className="w3-left w3-hover-text-khaki" onClick={this.incrementSlide(-1)}><i className="fas fa-chevron-left"></i></div>
          {dots}
          <div className="w3-right w3-hover-text-khaki" onClick={this.incrementSlide(1)}><i className="fas fa-chevron-right"></i></div>
        </div>
      </div>
    );
  }
}

export default ImageSlide;
