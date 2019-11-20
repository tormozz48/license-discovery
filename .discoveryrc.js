module.exports = {
    name: 'Node modules licenses dashboard',
    data: require('./data/source'),
    view: {
        basedir: __dirname,
        assets: [
            'pages/default.js',
            'styles/style.css'
        ]
    }
};
