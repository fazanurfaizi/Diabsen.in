import { diacriticless } from '@/core/utils/diacritics'

const escapeRegExp = str => str.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');

export default {
    format(x) {
        return x
    },
    filterPredicate(rowVal, filter, skipDiacritics = false, fromDropdown = false) {
        if(typeof rowVal === 'undefined' || rowVal === null) {
            return false
        }

        const rowValue = skipDiacritics
            ? String(rowVal).toLowerCase()
            : diacriticless(escapeRegExp(String(rowVal)).toLowerCase())

        const searchTerm = skipDiacritics
            ? filter.toLowerCase()
            : diacriticless(escapeRegExp(filter).toLowerCase())

        return fromDropdown ? rowValue === searchTerm : (rowValue.indexOf(searchTerm) > -1)
    },
    compare(x, y) {
        function cook(d) {
            if(typeof d === 'undefined' || d === null) return ''
            return diacriticless(String(d).toLowerCase())
        }

        x = cook(x)
        y = cook(y)
        if(x < y) return -1
        if(x > y) return 1
        return 0
    }
}