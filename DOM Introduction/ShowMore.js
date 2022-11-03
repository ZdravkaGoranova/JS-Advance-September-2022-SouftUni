function showFullText() {

    let smallTextElement = document.getElementsByClassName('small')[0];
    let fullTextElement = document.getElementsByClassName('full')[0];
//или
    // smallTextElement.style.display = 'none';
    // fullTextElement.style.display = 'block';

    fullTextElement.className = 'small';
    smallTextElement.className = 'full';

} showFullText()