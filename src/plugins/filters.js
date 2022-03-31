import Vue from 'vue'

// import { format, formatDistanceToNowStrict, parseISO } from 'date-fns';

// export function toDateFormat(value, fomat = 'dd-MMM-yyyy, hh:mm:ss') {
//     return format(parseISO(value), fomat);
// }

// export function toFormatDistanceFromNow(value, shortFlag = false) {
//     const diff = formatDistanceToNowStrict(new Date(value));
//     const diffArray = diff.split(' ');
//     const singleC = diffArray[1];
//     let date = ''
//     if (shortFlag) {
//         date = `${diffArray[0]}${singleC.split('')[0]
//             }`
//     } else {
//         date = `${diffArray[0]} ${singleC}`
//     }
//     return date;
// }

// export function humanReadable(value) {
//     return formatDistanceToNowStrict(new Date(value), {
//         includeSeconds: true,
//         addSuffix: true,
//     });
// }

// export function daysDiff(startDate, endDate, daysToAddOrRemove = 0) {
//     if (!endDate) return ''
//     const oneDay = 24 * 60 * 60 * 1000
//     const startDateObject = new Date(startDate)
//     const endDateObject = new Date(endDate)

//     return (
//         Math.round(
//             Math.abs((startDateObject.getTime() - endDateObject.getTime()) / oneDay)
//         ) + daysToAddOrRemove || 1
//     )
// }

export function strLimit(value, length = 100) {
    return value.length > length ? value.substring(0, length) + '...' : value
}

export function reverse(value) {
    if (!value) return ''
    return value.split('').reverse().join('')
}

export function capitalize(string) {
    if (!string) return ''
    return string.replace(/^./, function (match) {
        return match.toUpperCase();
    });
}
export function uncapitalize(string) {
    if (!string) return ''
    return string.replace(/^./, function (match) {
        return match.toLowerCase();
    });
}
export function uppercase(value) {
    if (!value) return ''
    return value.toUpperCase();
}

export function kebabCase(value) {
    if (!value) return ''
    return value
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');
}

export function snakeCase(value) {
    if (!value) return ''
    return value
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');
}

export function swapCase(value) {
    if (!value) return ''
    return value.replace(/\w{1}/g, function (val) {
        return val === val.toLowerCase() ? val.toUpperCase() : val.toLowerCase();
    });
}

export function titleCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString().toLowerCase();
    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}

export function camelCase(text) {
    text = text.toLowerCase().replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
    return text.substr(0, 1).toLowerCase() + text.substr(1);
}

Vue.prototype.$strLimit = strLimit
Vue.prototype.$reverse = reverse
Vue.prototype.$capitalize = capitalize
Vue.prototype.$uncapitalize = uncapitalize
Vue.prototype.$kebabCase = kebabCase
Vue.prototype.$snakeCase = snakeCase
Vue.prototype.$swapCase = swapCase
Vue.prototype.$titleCase = titleCase
Vue.prototype.$camelCase = camelCase
Vue.prototype.$uppercase = uppercase