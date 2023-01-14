function home_page(){

    console.log("home_page function works")

    // main div where content will be added
    const main_page = document.getElementById('main_page')

    // remove everything from the page first 
    while (main_page.firstChild) {
        main_page.removeChild(main_page.firstChild)
    }

    // create home page div where home page contnet will be added
    const home_page = document.createElement('div')
    home_page.classList.add('home_page')
    main_page.appendChild(home_page)


    // Picture Side
    const picture_side = document.createElement('div')
    const picture_box = document.createElement('div')
    const picture_border = document.createElement('div')
    home_page.appendChild(picture_side)
    picture_side.appendChild(picture_box)
    picture_side.appendChild(picture_border)
    picture_border.appendChild(picture_box)
    picture_side.classList.add('picture_side')
    picture_box.classList.add('picture_box')

    // Text Side 
    const text_side = document.createElement('div')
    const text_box = document.createElement('div')
    home_page.appendChild(text_side)
    text_side.appendChild(text_box)
    text_side.classList.add('text_side')
    text_box.classList.add('text_box')
    const home_p = document.createElement('h1')
    let home_string = `Watermelon Music offers lessons to all age groups! Click on the lessons tab to find out more!`;
    const home_node = document.createTextNode(home_string)
    home_p.appendChild(home_node)
    text_box.appendChild(home_p)


}

export default home_page;