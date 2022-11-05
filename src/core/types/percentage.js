import number from "./number"

const percentage = Object.assign({}, number)

percentage.format = function(value) {
    if(value === undefined || value === null)
        return ''

    return `${parseFloat(value * 100).toFixed(2)}%`
}

export default percentage