import _ from 'lodash'
import printMe from './print.js'
import {Wall} from './wall.js'

function component() {
  let wall = new Wall('orange');

  var element = document.createElement('div');
  var printBtn = document.createElement('button');
  var paintBtn = document.createElement('button');

  printBtn.innerHTML = 'Print';
  printBtn.onclick = printMe;

  paintBtn.innerHTML = 'Paint';
  paintBtn.onclick = new function() { wall.paint() };

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(printBtn);
  element.appendChild(paintBtn);

  return element;
}

document.body.appendChild(component());
