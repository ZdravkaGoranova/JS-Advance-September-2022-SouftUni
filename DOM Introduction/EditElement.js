function editElement(reference, match, replacer) {
    let text = reference.textContent;
    //втори вариянт
    //const matcher= new RegExp(match,"g");
    //const edited= text.replaceAll(matcher, replacer);
    text = text.replaceAll(match, replacer);
    reference.textContent = text;

    let element = document.getElementById("chang-me");
    
}

editElement(element, "Hello,%insert name here%!", "Hello,Document Object Model")