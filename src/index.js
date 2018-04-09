/* Webpack supports natively import and export features, it does have already a transpiler that
 * resolve this. If we need to use some new features from es2015/ES6, we must use another transpiler like babel to support
 * read this https://webpack.js.org/guides/getting-started/#modules to learn how to do it*/
import _ from 'lodash';
// Webpack has loaders in his ecosystem that permits to load certain styles to our js modules/components :D AMAZING!
import './style.css';
import IconWindowsUrl from './images/activedirectory.png';
import jsonData from './jsonData/MOCK_DATA.json';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    let myIcon = new Image();
    myIcon.src = IconWindowsUrl;
    element.appendChild(myIcon);

    return element;
}

function loadData() {
    const data = jsonData;
    const Person = {
        fullName: function () {
            return `Name: ${this.name} ${this.email}`;
        }
    };

    _.forEach(data, (person) => {
        let currentPerson = Object.create(Person);
        currentPerson.name = person.first_name;
        console.log(currentPerson.fullName());
    });
}

document.body.appendChild(component());

loadData();
