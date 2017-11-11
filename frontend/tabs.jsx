import React from 'react';


class Tab extends React.Component{
  constructor(props){
    super(props);
    // this.words = "";
    // this.props.tabs.forEach( function (el) {
    //   this.words+= el.toString();
    // });

  }

  render(){
    return (

      <h1>{this.props.toString()}</h1>

    );
  }
}
export default Tab;
