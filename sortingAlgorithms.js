/**
 * Optimal bubbleSorting Algorithm
 * @param {*} inputArr
 */
let bubbleSort = (inputArr, bubbleSortAnimations, swapAnimations) => {
	let array = inputArr.slice()
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
let insertionSort = (inputArr, insertionSortAnimations, swapAnimations) => {
	let array = inputArr.slice()
	let length = array.length
	let base
	let target
	for (let i = 1; i < length; i++) {
		let key = array[i]
		let j = i - 1
		base = i
		target = i - 1
		// Starting comparison on next for loop iter
		insertionSortAnimations.push([base, target])
		// console.log(base)
		// console.log(target)
		swapAnimations.push(0)
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j]
			j = j - 1
			// Push currently swapping indexes
			insertionSortAnimations.push([base, target])
			swapAnimations.push(1)
			base--
			target--
		}

		array[j + 1] = key
	}
	return array
}

/**
 * Optimal mergeSorting Algorithms
 * @param {*} inputArr
 */
let mergeSort = (inputArr, mergeSortAnimations, swapAnimations) => {
	let arr = inputArr.slice()
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
				mergeSortAnimations.push([left, right])
				swapAnimations.push(0)
				if (sorted[left] <= sorted[right]) {
					buffer[i++] = sorted[left++]
					mergeSortAnimations.push([left, i])
					swapAnimations.push(1)
				} else {
					buffer[i++] = sorted[right++]
					mergeSortAnimations.push([right, i])
					swapAnimations.push(1)
				}
			}
			while (left < leftLimit) {
				buffer[i++] = sorted[left++]
				mergeSortAnimations.push([left, i])
				swapAnimations.push(1)
			}
			while (right < rightLimit) {
				buffer[i++] = sorted[right++]
				mergeSortAnimations.push([right, i])
				swapAnimations.push(1)
			}
		}
		var temp = sorted,
			sorted = buffer,
			buffer = temp
	}

	return sorted
}

export { bubbleSort, insertionSort, mergeSort }
