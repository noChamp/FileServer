exports.createAudio = function (lesson) {
    
    const element = document.createElement('audio');        
    element.setAttribute('type', 'audio/mp3');
    element.setAttribute('src', `https://my-cors-proxy.mycorsproxy.workers.dev/?url=https%3A%2F%2Fdocs.google.com%2Fuc%3Fexport%3Dopen%26id%3D${lesson.audio}`);
    element.setAttribute('controls', '');
    element.innerHTML = 'Your browser does not support the <code>audio</code> element.'

    return element;
}
