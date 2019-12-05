import lesson from './lesson.json';
import title from './components/title/title.js';
import video from './components/video/video.js';

function component() {
    const element = document.createElement('div');

    element.appendChild(title.createTitle(lesson));
    element.appendChild(video.createVideo(lesson));

    return element;
}
  
document.body.appendChild(component());
