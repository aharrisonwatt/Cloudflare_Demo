var React = require('react'),
    ReactDOM = require('react-dom');

var Template = require('./components/template');

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Template />, document.getElementById('root'));
});
