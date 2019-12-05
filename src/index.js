import lesson from './lesson.json';
import title from './components/title/title.js';

function component() {
    const element = document.createElement('div');

    element.appendChild(title.createTitle(lesson));

    return element;
}
  
document.body.appendChild(component());
