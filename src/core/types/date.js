import { format, parse, isValid, compareAsc } from 'date-fns'
import def from './default'

const date = Object.assign({}, def)

date.isRight = true

date.compare = function(x, y, column) {
    function cook(d) {
        if(column && column.dateInputFormat) {
            return parse(`${d}`, `${column.dateInputFormat}`, new Date())
        } else if(typeof d === 'string') {
            try {
                return Date.parse(d)
            } catch (error) {
                return d
            }
        }

        return d
    }

    x = cook(x)
    y = cook(y)

    if(!isValid(x)) {
        return -1
    }

    if(!isValid(y)) {
        return 1
    }

    return compareAsc(x, y)
}

date.format = function(value, column) {
    if(value === undefined || value === null)
        return ''

    const date = parse(value, column.dateInputFormat, new Date())
    if(isValid(date)) {
        return format(date, column.dateOuputFormat)
    }

    console.error(`Not a valid date: "${value}"`)
    return null
}

export default date