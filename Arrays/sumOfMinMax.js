function sumOfSmallAndLargeValue(arr) {
    let minCounter = 0, maxCounter = 0, sum;
    if (arr.length === 0) return 0;

    arr = arr.filter((x) => typeof x === "number");

    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);

    if (minValue === maxValue) return minValue * arr.length;


    arr.forEach((x) => {
        if (x === minValue) minCounter++;
        if (x === maxValue) maxCounter++;
    });
    // console.log(minCounter);
    // console.log(maxCounter);

    sum = (minCounter * minValue) + (maxCounter * maxValue)

    return sum;
}

// console.log(sumOfSmallAndLargeValue([]));
// console.log(sumOfSmallAndLargeValue([2]));
// console.log(sumOfSmallAndLargeValue([2, 2, 2, 2, 2, 2, 2]));
// console.log(sumOfSmallAndLargeValue([22, 22, 18, 18, 12, 12, 12]));
console.log(sumOfSmallAndLargeValue([2, 4, 1, 5, 3, "x", "y"]));