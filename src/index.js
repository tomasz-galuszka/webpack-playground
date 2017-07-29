import _ from 'lodash';
import './css/app.css';
import AppIcon from './img/wpack.png'

function component() {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	var appIcon = new Image();
	appIcon.src = AppIcon;
	
	element.appendChild(appIcon);

	return element;
}

function signature() {
	var signatureElement = document.createElement('div');
	
	signatureElement.innerHTML = _.join(['Tomasz', 'Galuszka'], ' ');
	signatureElement.classList.add('signature');

	return signatureElement;
}

document.body.appendChild(component());
document.body.appendChild(signature());
