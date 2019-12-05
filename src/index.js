import lesson from './lesson.json';
import title from './components/title/title.js';
import video from './components/video/video.js';
import audio from './components/audio/audio';
import doc from './components/document/document.js';

function component() {
    const element = document.createElement('div');

    element.appendChild(title.createTitle(lesson));
    element.appendChild(video.createVideo(lesson));
    element.appendChild(audio.createAudio(lesson));
    element.appendChild(doc.createDocument(lesson));

    return element;
}
  
document.body.appendChild(component());
