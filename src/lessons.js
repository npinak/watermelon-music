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

    // Create divs for lessons
    const lessons_div = document.createElement('div');
    lessons_div.classList.add("lesson_div")
    lessons_div.setAttribute("id", "lesson_div")

    const guitar_div = document.createElement('div');
    guitar_div.classList.add("music_lesson_div")
    guitar_div.setAttribute("id", "guitar_div")

    const bass_div = document.createElement('div');
    bass_div.classList.add("music_lesson_div")
    bass_div.setAttribute("id", "bass_div")

    const piano_div = document.createElement('div');
    piano_div.classList.add("music_lesson_div")
    piano_div.setAttribute("id", "piano_div")

    const drums_div = document.createElement('div');
    drums_div.classList.add("music_lesson_div")
    drums_div.setAttribute("id", "drums_div")
    

    // create pictures 
    const guitar_img = document.createElement("img")
    guitar_img.src = guitar 

    const drums_img = document.createElement("img")
    drums_img.src = drums
    
    const bass_img = document.createElement("img")
    bass_img.src = bass
    
    const piano_img = document.createElement("img")
    piano_img.src = piano 


    // append elements
    main_page.appendChild(lessons_div)
    
    lessons_div.appendChild(guitar_div)
    guitar_div.appendChild(guitar_img)

    lessons_div.appendChild(drums_div)
    drums_div.appendChild(drums_img)

    lessons_div.appendChild(bass_div)
    bass_div.appendChild(bass_img)

    lessons_div.appendChild(piano_div)
    piano_div.appendChild(piano_img)
    



    // create text for pictures 


}

export default lessons;