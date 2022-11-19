import number from "./number"

const decimal = Object.assign({}, number)

decimal.format = function(value) {
    if(value === undefined || value === null)
        return ''

    return parseFloat(Math.round(value * 100) / 100).toFixed(2)
}

export default decimal