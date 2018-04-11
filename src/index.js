/* Webpack supports natively import and export features, it does have already a transpiler that
 * resolve this. If we need to use some new features from es2015/ES6, we must use another transpiler like babel to support
 * read this https://webpack.js.org/guides/getting-started/#modules to learn how to do it*/
import { cube } from './math.js';
import {used} from './data.json';

function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

let element = component();
document.body.appendChild(element);

console.log(used);

