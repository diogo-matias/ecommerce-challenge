export function getPaginationArray(currentPage: number, total: number) {
    const arr: Array<number | string> = [];

    const selectedNumber = currentPage;
    const position = selectedNumber - 1;

    const distanceToBottom = selectedNumber - 1;
    const distanceToTop = total - selectedNumber;

    let numberOfHigherValues = 3;
    let numberOfLowerValues = 3;
    const totalHigherValues = total - selectedNumber;
    const totalLowerValues = selectedNumber - 1;
    const higherValues = [];
    const lowerValues = [];

    if (distanceToBottom < 3) {
        const faltando = 3 - distanceToBottom;
        numberOfHigherValues = 3 + faltando;
        numberOfLowerValues = numberOfLowerValues - faltando;
    }

    if (distanceToTop < 3) {
        const faltando = 3 - distanceToTop;
        numberOfLowerValues = 3 + faltando;
        numberOfHigherValues = numberOfHigherValues - faltando;
    }

    arr[position] = selectedNumber;

    for (let index = 1; index <= numberOfLowerValues; index++) {
        arr[position - index] = selectedNumber - index;
    }

    for (let index = 1; index <= numberOfHigherValues; index++) {
        arr[position + index] = selectedNumber + index;
    }

    for (let index = 0; index < totalHigherValues; index++) {
        higherValues.push(selectedNumber + index);
    }

    for (let index = 1; index < totalLowerValues; index++) {
        lowerValues.push(selectedNumber - index);
    }

    const filtered = arr.filter((item) => item);
    const lastIndex = filtered.length - 1;

    filtered[0] = 1;
    filtered[lastIndex] = total - 1;

    filtered[1] = filtered[1] === filtered[0] + 1 ? filtered[1] : "select1";
    filtered[lastIndex - 1] =
        filtered[lastIndex - 1] === filtered[lastIndex] - 1
            ? filtered[lastIndex - 1]
            : "select2";

    return { pagination: filtered, higherValues, lowerValues };
}
