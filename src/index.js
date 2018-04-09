/* Webpack supports natively import and export features, it does have already a transpiler that
 * resolve this. If we need to use some new features from es2015/ES6, we must use another transpiler like babel to support
 * read this https://webpack.js.org/guides/getting-started/#modules to learn how to do it*/
import _ from 'lodash';
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

