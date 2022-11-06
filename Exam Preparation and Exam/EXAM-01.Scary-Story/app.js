window.addEventListener("load", solve);

function solve() {

  let firstName = document.querySelector('#first-name');
  let lastName = document.querySelector('#last-name');
  let age = document.querySelector('#age');
  let genre = document.querySelector('#genre');
  let storyTitle = document.querySelector('#story-title');
  let story = document.querySelector('#story');
  let previewList = document.querySelector('#preview-list');
  let body = document.getElementsByClassName("#body");

  let src = document.querySelector('script', "src=[app.js]");

  let publishBtn = document.querySelector('#form-btn');
  publishBtn.addEventListener('click', validateAndAdd);

  function validateAndAdd(e) {
    if (firstName.value !== '' && lastName.value !== '' && Number(age.value) > 0 && age.value !== '' && storyTitle.value !== '' && story.value !== '') {
      let fnlVl = firstName.value;
      let lnlVl = lastName.value;
      let storyTitleVl = storyTitle.value;
      let ageVl = Number(age.value);
      let storyVl = story.value;
      let genreVl = genre.value;

      add(e, fnlVl, lnlVl, storyTitleVl, ageVl, storyVl, genreVl);
      clearInputs();
    }
  };
  function add(e, fnlVl, lnlVl, storyTitleVl, ageVl, storyVl, genreVl) {
    e.preventDefault();

    previewList = document.querySelector('#preview-list');

    let li = htmlGenerator('li', '', previewList);
    li.setAttribute('class', 'story-info');

    let article = htmlGenerator('article', '', li);

    htmlGenerator('h4', `Name: ${firstName.value} ${lastName.value}`, article);
    htmlGenerator('p', `Age: ${Number(age.value)}`, article);
    htmlGenerator('p', `Title: ${storyTitle.value}`, article);
    htmlGenerator('p', `Genre: ${genre.value}`, article);
    htmlGenerator('p', `${story.value}`, article);

    let saveBtn = htmlGenerator('button', 'Save Story', li);
    saveBtn.setAttribute('class', 'seve-btn');

    saveBtn.addEventListener('click', (e) => {
      debugger;

      let main = document.querySelector("#main")
      main.textContent = ""
      let h1 = document.createElement("h1")
      h1.textContent = "Your scary story is saved!"
      main.appendChild(h1)
      // document.querySelector( 'div', "class[form-wrapper]").remove();
      // let div = htmlGenerator('li', '', src);
      // let h1 = htmlGenerator('h1', 'Your scary story is saved!', div);

    })

    let editBtn = htmlGenerator('button', 'Edit Story', li);
    editBtn.setAttribute('class', 'edit-btn');

    editBtn.addEventListener('click', (e) => {
      debugger;
      //e.target.parentElement.remove();

      firstName.value = fnlVl;
      lastName.value = lnlVl;
      storyTitle.textContent = storyTitleVl;
      age.value = ageVl;
      story.value = storyVl;
      genre.value = genreVl;

      //e.target.parentElement.remove()
      li.remove()
      publishBtn.disabled = false;
    })

    let delBtn = htmlGenerator('button', 'Delete Story', li);
    delBtn.setAttribute('class', 'delete-btn');
    delBtn.addEventListener('click', (e) => {
      debugger;

      li.remove()
      publishBtn.disabled = false;
    })
    publishBtn.setAttribute('disabled', 'disabled');
  };
  function htmlGenerator(tagName, content, parent) {
    let el = document.createElement(tagName);
    el.textContent = content;
    if (parent) {
      parent.appendChild(el);
    }
    return el;
  };
  function clearInputs() {

    firstName.value = '';
    lastName.value = '';
    storyTitle.value = '';
    age.value = '';
    story.value = '';
    genre.value = '';
  }
}