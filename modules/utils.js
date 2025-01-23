const bubbleSort = (arr, length) => {
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr
}

const u = [3, 5, 9, 4, 7]

console.log(bubbleSort(u, u.length));

