import React from "react";
export default class Clock extends React.Component {
  state = {date: new Date()};

  render() {
    const {date} = this.state;

    return(
      <div>
        <h1 className="heading">Clock</h1>
        <h2 className="clock">{date.toLocaleTimeString("bn-BD")}</h2>
      </div>
    )
  }
}
