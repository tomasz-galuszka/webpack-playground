import _ from 'lodash';
import printMe from './print.js'; 
import './styles.css'

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting update printMe module !');
		
		// refresh components
		element = component();
		document.body.removeChild(element);
		document.body.appendChild(element);
	});
}

let element = component();

function component() {
	var element = document.createElement('div');
	var button = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	button.innerHTML = 'Click me and check the console!';
	button.onclick = printMe;

	element.appendChild(button);

	return element;
}
document.body.appendChild(element);
