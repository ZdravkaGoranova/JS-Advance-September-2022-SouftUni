function changeText() {
    let header = document.getElementsByTagName('h1');

    let input = document.getElementById('my-data');
    let value = input.value;
    
    header[0].innerHTML = `<p>${value}</p>`;
    header[0].style.color = 'red';
}