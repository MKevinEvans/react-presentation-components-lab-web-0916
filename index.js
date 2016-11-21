const React = require('react');
const ReactDOM = require('react-dom');

const DumbComponent = require('./components/DumbComponent');
const DumberComponent = require('./components/DumberComponent');

function something(){
	alert("something")
}

ReactDOM.render(
  <div>
    <DumbComponent />
    <DumberComponent handleClick={something} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // leave this in!
