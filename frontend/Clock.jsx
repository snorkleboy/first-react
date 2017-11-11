import React from 'react';


class Clock extends React.Component{
  constructor(){
    super();
    this.state={
      time: new Date()
    };


  }
  componentDidMount(){
    this.handle = setInterval(this.tick.bind(this), 1000);
    // clearInterval(handle);
  }
  render(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    // let date = this.state.time.getD
    // <h1> {hours} : {minutes} : {seconds} </h1>

    return(
      <div className='clock-div'>
        <h1 className = 'clock-text'> {this.state.time.toString().slice(0,-14)}</h1>
      </div>
    );
  }

  tick(){
    this.setState( {time : new Date()} );
  }
}

export default Clock;
