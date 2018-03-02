// import york from '../assets/images/york.jpg';
import demoStyle from './demo.css';

const template = require('./demo-template.html');

const demoPageRender = () => {
  const element = document.createElement('div');
  element.innerHTML = `${template}`;
  return element;
};

document.body.appendChild(demoPageRender());
