function lessons(){

    // getting the main div where content will be added
    const main_div = document.getElementById('content');
    const main_page = document.getElementById('main_page')

    //remove all previous nodes from the main_page
    while(main_page.firstChild){
        main_page.removeChild(main_page.firstChild)
    }

    // creating main center box where instrument lessons will be displayed
    const center_box = document.createElement('div')
    center_box.classList.add('center_box')
    main_page.appendChild(center_box)

    // adding instrument divs 
    const guitar_div = document.createElement('div')
    const guitar_p = document.createElement('p')
    const guitar_node = document.createTextNode("Guitar Lessons. Call 123-321-1234")
    guitar_p.appendChild(guitar_node)
    guitar_div.classList.add('instrument-image')
    guitar_div.setAttribute("id", "guitar")
    center_box.appendChild(guitar_div)
    guitar_div.appendChild(guitar_p)

    const drums_div = document.createElement('div')
    const drums_p = document.createElement('p')
    const drum_node = document.createTextNode("Drum Lessons. Call 555-555-5555")
    drums_p.appendChild(drum_node)
    drums_div.classList.add('instrument-image')
    drums_div.setAttribute("id", "drums")
    center_box.appendChild(drums_div)
    drums_div.appendChild(drums_p)

    const bass_div = document.createElement('div')
    const bass_p = document.createElement('p')
    const bass_node = document.createTextNode("Bass Lessons. Call 121-212-1212")
    bass_p.appendChild(bass_node)
    bass_div.classList.add('instrument-image')
    bass_div.setAttribute("id", "bass")
    center_box.appendChild(bass_div)
    bass_div.appendChild(bass_p)

    const piano_div = document.createElement('div')
    const piano_p = document.createElement('p')
    const piano_node = document.createTextNode("Piano Lessons. Call 212-121-2121")
    piano_p.appendChild(piano_node)
    piano_div.classList.add('instrument-image')
    piano_div.setAttribute("id", "piano")
    center_box.appendChild(piano_div)
    piano_div.appendChild(piano_p)
   
}

export default lessons;