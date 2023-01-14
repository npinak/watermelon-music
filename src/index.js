import './style.css'; // import css style sheet 
import lessons from './lessons.js'
import home_page from './home.js'
import contact_page from './contact.js'

function restuarant_page(){

    // main divs -- might not need main page because it is gonna made when a button is pressed 
    const main_div = document.getElementById('content');

    const header = document.createElement('div');
    header.classList.add("header")

    const main_page = document.createElement('div')
    main_page.classList.add("main_page")
    main_page.setAttribute("id", "main_page")

    // split header into right and left side 
    const right_side_header = document.createElement('div');
    right_side_header.classList.add("right_side_header")

    const left_side_header = document.createElement('div');
    left_side_header.classList.add("left_side_header")

    // buttons
    const home_button = document.createElement("button")
    home_button.classList.add("header_button")
    home_button.innerText = "Home"
    home_button.setAttribute("id", "home_button")

    const lesson_button = document.createElement("button")
    lesson_button.classList.add("header_button")
    lesson_button.innerText = "Lessons"
    lesson_button.setAttribute("id", "lesson_button")

    const contact_button = document.createElement("button")
    contact_button.classList.add("header_button")
    contact_button.innerText = "Contact Us"
    contact_button.setAttribute("id", "contact_button")

    // header text
    const header_text = document.createElement('h1');
    var text = document.createTextNode("Watermelon Music");
    header_text.appendChild(text);


    //add elements to the document
    main_div.appendChild(header);
    main_div.appendChild(main_page);

    header.appendChild(left_side_header);
    header.appendChild(right_side_header);

    left_side_header.appendChild(header_text);
    right_side_header.appendChild(home_button);
    right_side_header.appendChild(lesson_button);
    right_side_header.appendChild(contact_button);
    
    console.log(main_div)

    document.getElementById("lesson_button").onclick = lessons;
    document.getElementById("home_button").onclick = home_page; 
    document.getElementById("contact_button").onclick = contact_page;

 

    return main_div; //very important to return main_div, whole thing does not work if a tiny part does not work
}

document.body.appendChild(restuarant_page());

