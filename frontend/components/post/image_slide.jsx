import React from 'react';

class ImageSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      image_urls: props.images || [],
      maxHeight: 0
    };
    this.navShow = false;
    this.incrementSlide = this.incrementSlide.bind(this);
    this.currentSlide = this.currentSlide.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.refCount = this.state.image_urls.length;
  }

  componentDidMount(){

    if (this.state.image_urls.length > 0){
      this.refs[`images${this.state.index}`].style.display = "flex";
    }
      // if (this.refs[`images${i}`].height > this.maxHeight) {
      //   this.maxHeight = this.refs[`images${i}`].height;
      // }
  }

  handleImageLoad(e) {

    if (e.target.height > this.state.maxHeight) {
      this.setState({maxHeight: e.target.height});
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
    let mySlides;
    if (this.state.image_urls.length > 0) {

      if (this.state.image_urls.length > 1) this.navShow = true;
      mySlides = this.state.image_urls.map( (url, i) => {
        let imageDisp = "none";
        let dotClass = "far";
        if (i === this.state.index) {
          imageDisp = "flex";
          dotClass = "fas";
        }
        dots.push(
          <span ref={`dots${i}`} key={i} className="carousel-dot carousel-controls" onClick={this.currentSlide(i)}><i className={` fa-circle ${dotClass}`}></i></span>);

        return (
          <img onLoad={this.handleImageLoad} ref={`images${i}`} key={i} className="mySlides" src={url} style={{display:`${imageDisp}`, height: "auto"}}/>
        );
      });
    }

    return(
      <div className="image-carousel" style={this.state.maxHeight === 0 ? {height: "auto"} : {height: `${this.state.maxHeight}px`}}>
        {mySlides}
        <div className="image-carousel-nav" style={
          !this.navShow ? {display: "none"} : {}
        }>
          <div className="w3-left w3-hover-text-khaki" onClick={this.incrementSlide(-1)}><i className="fas fa-chevron-left carousel-controls"></i></div>
          <div className="carousel-nav-dots">
            {dots}
          </div>
          <div className="w3-right w3-hover-text-khaki carousel-controls" onClick={this.incrementSlide(1)}><i className="fas fa-chevron-right"></i></div>
        </div>
      </div>
    );
  }
}

export default ImageSlide;
