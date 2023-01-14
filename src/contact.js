function contact_page() {

     // main div where content will be added
    const main_page = document.getElementById('main_page')

    // remove previous elements from the page 
    while (main_page.firstChild) {
        main_page.removeChild(main_page.firstChild)
    }

    // create contact page div 
    const contact_page = document.createElement('div')  
    contact_page.classList.add('contact_page')
    main_page.appendChild(contact_page)
  
    // create div where textbox will be placed
    const text_div = document.createElement('div')
    text_div.classList.add('contact_text_div')
    contact_page.appendChild(text_div)

    // create textbox for text div
    const textbox = document.createElement('div')
    textbox.classList.add('contact_textbox')
    text_div.appendChild(textbox)

    //create text for textbox
    const contact_p = document.createElement('h1')
    let contact_string = `Call the store at 545-545-5454! \nWe are located at 1212 Oak Street San Fransisco, CA.`;
    const contact_node = document.createTextNode(contact_string)
    contact_p.appendChild(contact_node)
    textbox.appendChild(contact_p)

    // disable contact button, enable home and lesson button
    document.getElementById("home_button").disabled = false;
    document.getElementById("lesson_button").disabled = false;
    document.getElementById("contact_button").disabled = true;



}


export default contact_page;

