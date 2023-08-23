'use strict'

function Mergesort(arr) {
    let n = arr.length
    if (n <= 1) {
        return arr
    } else {
        let mid = Math.floor(n / 2) // 7
        let left = arr.slice(0, mid) // [0,6] --> [0,2] -->[0,1]--> [0](1)
        let right = arr.slice(mid, n) //[6,12] --> [9,12]-->[10,12] -->[11,12]-->[12] (13)
        Mergesort(left)
        Mergesort(right)
        Merge(left, right, arr)
        return arr
    }
}
function Merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i = i + 1
        } else {
            arr[k] = right[j]
            j = j + 1
        }
        k = k + 1
    }

    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}