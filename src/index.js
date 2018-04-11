import {cube} from './math.js';

// Determined with webpack.DefinePlugin
if (process.env.NODE_EN !== 'production') {
    console.log('we are in development mode');
}


function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());