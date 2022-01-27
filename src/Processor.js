class Processor{
    static process(data) {
        var formatedData = data.split('\r\n')
        var rows = []
        formatedData.forEach(row => {
            var arr = row.split(',')
            rows.push(arr)
        })
        return(rows)
    }
}

module.exports = Processor