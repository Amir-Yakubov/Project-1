export function splitArrayIntoBatches(array, batchSize) {
    const batches = [];
    for (let i = 0; i < array.length; i += batchSize) {
        batches.push(array.slice(i, i + batchSize));
    }
    return batches;
}

function flattenArray(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            acc.push(...flattenArray(curr));
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);
}