constructor(props) {
  super(props);
  this.state = {
    time: new Date()
  };
  this.tick = this.tick.bind(this);
}

componentDidMount() {
  this.intervalId = setInterval(this.tick, 1000);
}

componentWillUnmount() {
  clearInterval(this.intervalId);
}

tick() {
  this.setState({time: new Date()});
}
