const licenseLs = require('license-ls')

module.exports = function() {
    const options = {
        depth: 0
    }

    return licenseLs(options);
};