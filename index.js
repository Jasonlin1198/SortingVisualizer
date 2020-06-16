import { bubbleSort, insertionSort, mergeSort } from './sortingAlgorithms.js'

// import html elements
let inputText = document.getElementById('arrayInput')
let inputResult = document.getElementById('displayInput')
let inputButton = document.getElementById('submit')
let bubbleSortDiv = document.getElementById('bubbleSort')
let insertionSortDiv = document.getElementById('insertionSort')
let mergeSortDiv = document.getElementById('mergeSort')

// Initilze Array
let ARRAY = []

/**
 *  OnClick for input array button
 */
function inputClick() {
	// Clear result content
	inputResult.textContent = ''
	bubbleSortDiv.textContent = 'Bubble Sort: '
	insertionSortDiv.textContent = 'Insertion Sort: '
	mergeSortDiv.textContent = 'Merge Sort: '

	// Remove non-numberic characters from input
	let filteredArray = inputText.value.split('').filter((char) => {
		return char !== ',' ? true : false
	})
	// Append parsed input array
	filteredArray.map((element) => {
		inputResult.textContent += element + ' '
	})
	// Initialize global array
	ARRAY = filteredArray

	// Sorting Algorithms
	let bubbleSorted = bubbleSort(ARRAY)
	let insertionSorted = insertionSort(ARRAY)
	let mergeSorted = mergeSort(ARRAY)

	// Display sorted arrays in proper divs
	bubbleSorted.map((element) => {
		bubbleSortDiv.textContent += element + ' '
	})
	insertionSorted.map((element) => {
		insertionSortDiv.textContent += element + ' '
	})
	mergeSorted.map((element) => {
		mergeSortDiv.textContent += element + ' '
	})
}

// Web page loaded functionality
addEventListener('DOMContentLoaded', () => {
	inputButton.addEventListener('click', inputClick)
})
