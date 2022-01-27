const Reader = require('./src/Reader')
const Processor = require('./src/Processor')
const Table = require('./src/Table')
const HTMLParser = require('./src/HTMLParser')
const Writer = require('./src/Writer')
const PDFWriter = require('./src/PDFWriter')


var vReader = new Reader()
var vWriter = new Writer()


async function main() {
    var data = await vReader.readFile('./example.csv')
    var processedData = Processor.process(data)
    var users = new Table(processedData)
    var html = await HTMLParser.parse(users)
    vWriter.write(Date.now() + '.html', html)
    PDFWriter.writePDF(Date.now() + '.pdf', html)
}

main()