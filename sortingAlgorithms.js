/**
 * Optimal bubbleSorting Algorithm
 * @param {*} inputArr
 */
let bubbleSort = (inputArr, bubbleSortAnimations, swapAnimations) => {
	let array = inputArr.slice(0)
	let len = array.length
	for (let i = 0; i < len; i++) {
		for (let j = 0, stop = len - i; j < stop; j++) {
			// Get indexices being compared and place into animation function
			bubbleSortAnimations.push([j, j + 1])

			if (array[j] > array[j + 1]) {
				// If swapped, push to animations
				swapAnimations.push(1)
				let tmp = array[j]
				array[j] = array[j + 1]
				array[j + 1] = tmp
			} else {
				swapAnimations.push(0)
			}
		}
	}
	return array
}

/**
 * Optimal insertionSorting Algorithm
 * @param {*} inputArr
 */
let insertionSort = (inputArr) => {
	let array = inputArr.slice(0)
	let length = array.length
	for (let i = 1; i < length; i++) {
		let key = array[i]
		let j = i - 1
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j]
			j = j - 1
		}
		array[j + 1] = key
	}
	return array
}

/**
 * Optimal mergeSorting Algorithms
 * @param {*} inputArr
 */
let mergeSort = (inputArr) => {
	let arr = inputArr.slice(0)
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
