//import _ from 'lodash'
import './style.css';
import Icon from './bp.png';
import Config from './config.json';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hello webpack';
    element.classList.add('hello');

    
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);


    // Add the button
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);


    // check the console that reading json files works !
    console.log(Config);

    return element;
  }
  
  document.body.appendChild(component());
