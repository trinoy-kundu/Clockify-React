import "./App.css";
import React from "react";
export default class Clock extends React.Component {
  state = {date: new Date()};

  componentDidMount() {
   this.intervalId = setInterval(() => {this.tick()}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

   tick() {
      this.setState({
        date: new Date(),
      })
    }

  render() {
    const {date} = this.state;
    const {locale} = this.props;

    return(
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <h2 className="clock">{date.toLocaleTimeString(locale)}</h2>
      </div>
    )
  }
}
