

function restuarant_page(){

    const main_div = document.getElementById('content');
    const header = document.createElement('div');

    // split header into right and left side 
    const right_side_header = document.createElement('div');
    const left_side_header = document.createElement('div');

    // buttons
    const home_button = document.createElement("button")
    home_button.classList.add("header_button")
    const menu_button = document.createElement("button")
    menu_button.classList.add("header_button")


    //add elements to the document
    main_div.appendChild(header);
    header.appendChild(right_side_header);
    header.appendChild(left_side_header);
    right_side_header.appendChild(home_button);
    left_side_header.appendChild(menu_button);


    console.log(main_div)

    return main_div; //very important to return main_div
}

document.body.appendChild(restuarant_page());

