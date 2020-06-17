import { bubbleSort, insertionSort, mergeSort } from '../sortingAlgorithms'
const arr = [3, 2, 1]
const sorted = [1, 2, 3]

/* Tests for optimal sorting algorithms */
test('test bubbleSort', () => {
	expect(bubbleSort(arr)).toStrictEqual(sorted)
})

test('test insertionSort', () => {
	expect(insertionSort(arr)).toStrictEqual(sorted)
})

test('test mergeSort', () => {
	expect(mergeSort(arr)).toStrictEqual(sorted)
})
