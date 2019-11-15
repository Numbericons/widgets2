import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.tick = this.tick.bind(this);
  };

  tick() {
    const time = new Date();
    const timeStr = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    this.setState({time: timeStr})
  }

  componentDidMount(){
    this.ticked = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.ticked);
  }
  render() {
    if (this.state.time === 0) return (<div>Loading...</div>);
    return (
      <div>
        <h1>Current Time: {this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;