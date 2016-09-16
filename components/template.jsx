//rendering everything through template to easily add future components like navbar

var React = require('react');

var MainPage = require('./main_page');

var Template = React.createClass({

  render(){
    return (
      <div className='main-container'>
        <MainPage/>
      </div>
    );
  }
});

module.exports = Template
