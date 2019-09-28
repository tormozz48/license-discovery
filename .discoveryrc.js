const path = require('path');
const resolve = (p) => path.join(__dirname, p);

module.exports = {
    name: 'Node modules licenses dashboard',
    data: require(resolve('./data/source')),
    view: {
        assets: [
            resolve('pages/default.js'),
            resolve('styles/style.css')
        ]
    }
};