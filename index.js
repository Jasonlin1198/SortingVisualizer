import { bubbleSort, insertionSort, mergeSort } from './sortingAlgorithms.js'

// input html elements
let inputText = document.getElementById('arrayInput')
let inputResult = document.getElementById('displayInput')
let inputButton = document.getElementById('submit')
inputButton.addEventListener('click', inputClick)

// optimal sort html elements
let bubbleSortDiv = document.getElementById('bubbleSort')
let insertionSortDiv = document.getElementById('insertionSort')
let mergeSortDiv = document.getElementById('mergeSort')

// array sort visual html element
let arrayContainer = document.getElementById('arrayContainer')
let sortButton = document.getElementById('sort')
sortButton.addEventListener('click', sortClick)

let randomSortButton = document.getElementById('randomSort')
randomSortButton.addEventListener('click', randomClick)

// Initilze Arrays
let ARRAY = []
let RANDOM_ARR = []

// Web page loaded functionality
addEventListener('DOMContentLoaded', () => {
	const randomArray = createRandomArray(10, 1, 100)
	visualizeArray(randomArray)
})

/**
 *  OnClick for input array button
 */
function inputClick() {
	// Clear result content
	inputResult.textContent = 'Your Array = '
	bubbleSortDiv.textContent = 'Bubble Sort: '
	insertionSortDiv.textContent = 'Insertion Sort: '
	mergeSortDiv.textContent = 'Merge Sort: '
	removeAllChildNode(arrayContainer)

	// Remove non-numberic characters from input
	let filteredArray = inputText.value.split(',').filter((char) => {
		return char !== ',' ? true : false
	})
	// Append parsed input array
	filteredArray.map((element) => {
		inputResult.textContent += element + ' '
	})

	// Initialize global array as input array - filteredArray is changed as a reference in below sorts
	ARRAY = filteredArray
	visualizeArray(ARRAY)

	// Sorting Algorithms to copies of filteredArrays
	let bubbleSorted = bubbleSort(filteredArray)
	let insertionSorted = insertionSort(filteredArray)
	let mergeSorted = mergeSort(filteredArray)

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

/**
 * Sorts random array from input and visualizes it on the page when clicked
 */
function sortClick() {
	removeAllChildNode(arrayContainer)
	const sortedArray = mergeSort(ARRAY)
	visualizeArray(sortedArray)
}

/**
 * Sort random array
 */
function randomClick() {
	removeAllChildNode(arrayContainer)
	const sortedRandomArray = mergeSort(RANDOM_ARR)
	visualizeArray(sortedRandomArray)
}

/**
 * Displays array content in html
 * @param {*} array - array to visualize in html
 */
function visualizeArray(array) {
	array.map((element) => {
		var newDiv = document.createElement('hr')
		newDiv.className = 'array-bar'
		newDiv.style.height = element.toString() + 'px'
		newDiv.innerText = element.toString()
		arrayContainer.appendChild(newDiv)
	})
}

/**
 * Removes all html children from parent
 * @param {*} parent - parent html element
 */
function removeAllChildNode(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild)
	}
}

/**
 * Generates random integer within input ranges
 * @param {*} min - smallest possible value
 * @param {*} max - largest possible value
 * @returns {Int} random int
 */
function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Creates array of length size of random inputs with values from min to max
 * @param {*} size - size of the array
 * @param {*} min - min value possible of elements
 * @param {*} max - max value possible of elements
 * @returns {Array} random array
 */
function createRandomArray(size, min, max) {
	const array = []
	for (let i = 0; i < size; i++) {
		array.push(randomIntFromInterval(min, max))
	}
	// Set global random array
	RANDOM_ARR = array
	return array
}
