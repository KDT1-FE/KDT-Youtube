export function viewCountConverter(count) {
    let result;
    if (count < 1000) {
        result = count;
    } else if (count < 10000) {
        const num = count / 1000;
        result = `${num.toFixed(1)}천`;
    } else if (count < 100000) {
        const num = count / 10000;
        result = `${num.toFixed(1)}만`;
    } else if (count < 100000000) {
        result = `${Math.floor(count / 10000)}만`;
    } else {
        result = `${Math.floor(count / 100000000)}억`;
    }
    return result;
}