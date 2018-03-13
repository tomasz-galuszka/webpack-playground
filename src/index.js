import _ from 'lodash'
import printMe from './print.js'
import {Wall} from './wall.js'
import './app.css';
import ScreenIconPath from './icon.png';

function component() {
  let wall = new Wall('orange');

  var element = document.createElement('div');
  var printBtn = document.createElement('button');
  var paintBtn = document.createElement('button');
  var screenIcon = new Image();

  printBtn.innerHTML = 'Print';
  printBtn.onclick = printMe;

  paintBtn.innerHTML = 'Paint';
  paintBtn.onclick = new function() { wall.paint() };

  screenIcon.src = ScreenIconPath;

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(printBtn);
  element.appendChild(paintBtn);
  element.appendChild(screenIcon);

  return element;
}

document.body.appendChild(component());
