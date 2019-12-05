
exports.createTitle = function (lesson) {
    
    const element = document.createElement('h1');        
    element.innerHTML = 'שיעורו השבועי של הרב רוזנבלום';
    element.innerHTML = element.innerHTML + "<br/>" + lesson.parasha + " " + lesson.year + " " + lesson.location

    return element;
}
