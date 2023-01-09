import _ from 'lodash';

function component() {

    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());

function restuarant_page(){

    const main_div = document.getElementById('content');
    console.log(main_div)



}
document.body.appendChild(restuarant_page());

