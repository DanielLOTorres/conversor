const fs = require('fs')
const util = require('util')

class Reader{

    constructor() {
        this.reader = util.promisify(fs.readFile)
    }

    async readFile(filePath) {
        try {
            return await this.reader(filePath, 'utf-8')    
        } catch (error) {
            return undefined
        }       
    }
}

module.exports = Reader