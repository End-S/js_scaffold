import york from '../assets/images/york.jpg';
import indexStyle from './index.css';

const demoPageRender = () => {
  const element = document.createElement('div');
  element.innerHTML = `
  <h1>Directory Structure:</h1>
  <ul>
    <li>root 📁</li>
    <ul>
      <li>assets 📁 - additional files</li>
      <ul>
        <li>images 📁</li>
      </ul>
      <li>dist 📁 - webpack output</li>
      <li>src 📁 - source files</li>
        <ul>
          <li>index.html 🗎</li>
          <li>index.js 🗎</li>
          <li>index.css 🗎</li>
        </ul>
    </ul>
  </ul>`;
  return element;
};

document.body.appendChild(demoPageRender());
