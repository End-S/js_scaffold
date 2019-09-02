import york from '../../assets/images/york.jpg';
import './demo.css';

const template = require('./demo-template.html');

const demoPageRender = () => {
  const element = document.createElement('div');
  element.innerHTML = `${template.default}
    <img src=${york} 
    class="demo-image" 
    alt="An  example of loading an image" 
    title="Demo Image">`;
  return element;
};

document.body.appendChild(demoPageRender());
