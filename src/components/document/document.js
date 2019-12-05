exports.createDocument = function (lesson) {
    
    const element = document.createElement('iframe');        
    element.setAttribute('width', '1366px');
    element.setAttribute('height', '623px');
    element.setAttribute('frameborder', '0');
    element.setAttribute('src', `https://view.officeapps.live.com/op/embed.aspx?src=https://drive.google.com/uc%3Fexport%3Ddownload%26id%3D${lesson.text}`);

    return element;
}
