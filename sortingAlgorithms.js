/**
 * Optimal bubbleSorting Algorithm
 * @param {*} inputArr
 */
let bubbleSort = (inputArr) => {
	let len = inputArr.length
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (inputArr[j] > inputArr[j + 1]) {
				let tmp = inputArr[j]
				inputArr[j] = inputArr[j + 1]
				inputArr[j + 1] = tmp
			}
		}
	}
	return inputArr
}

/**
 * Optimal insertionSorting Algorithm
 * @param {*} inputArr
 */
let insertionSort = (inputArr) => {
	let length = inputArr.length
	for (let i = 1; i < length; i++) {
		let key = inputArr[i]
		let j = i - 1
		while (j >= 0 && inputArr[j] > key) {
			inputArr[j + 1] = inputArr[j]
			j = j - 1
		}
		inputArr[j + 1] = key
	}
	return inputArr
}

/**
 * Optimal mergeSorting Algorithms
 * @param {*} arr
 */
let mergeSort = (arr) => {
	var sorted = arr.slice(),
		n = sorted.length,
		buffer = new Array(n)

	for (var size = 1; size < n; size *= 2) {
		for (var leftStart = 0; leftStart < n; leftStart += 2 * size) {
			var left = leftStart,
				right = Math.min(left + size, n),
				leftLimit = right,
				rightLimit = Math.min(right + size, n),
				i = left
			while (left < leftLimit && right < rightLimit) {
				if (sorted[left] <= sorted[right]) {
					buffer[i++] = sorted[left++]
				} else {
					buffer[i++] = sorted[right++]
				}
			}
			while (left < leftLimit) {
				buffer[i++] = sorted[left++]
			}
			while (right < rightLimit) {
				buffer[i++] = sorted[right++]
			}
		}
		var temp = sorted,
			sorted = buffer,
			buffer = temp
	}

	return sorted
}

export { bubbleSort, insertionSort, mergeSort }
