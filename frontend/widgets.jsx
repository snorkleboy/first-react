import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Tab from './tabs';
const tabProps = [{title: "one", content: "this"}, {title: "two", content: "that"}];


class Root extends React.Component{


  render(){
    return (
      <div>
        <Tab tabs={tabProps}/>

      <Clock/>

    </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));

});
