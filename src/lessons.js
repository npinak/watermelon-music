import drums from './images/drums.jpeg';
import guitar from './images/guitar.jpeg';
import piano from './images/piano.jpeg';
import bass from './images/bass.jpeg';


function lessons(){

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
    guitar_div.classList.add('guitar-image')
    center_box.appendChild(guitar_div)

    const drums_div = document.createElement('div')
    drums_div.classList.add('drums-image')
    center_box.appendChild(drums_div)

    const bass_div = document.createElement('div')
    bass_div.classList.add('bass-image')
    center_box.appendChild(bass_div)

    const piano_div = document.createElement('div')
    piano_div.classList.add('piano-image')
    center_box.appendChild(piano_div)

   
}

export default lessons;