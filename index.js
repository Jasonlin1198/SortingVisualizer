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
randomSortButton.addEventListener('click', randomSortClick)

// Initilze Arrays
let ARRAY = []
let RANDOM_ARR = []

let RANDOM_SIZE = 10
let RANDOM_MIN = 1
let RANDOM_MAX = 100

let ANIMATION_SPEED = 100

// Web page loaded functionality
addEventListener('DOMContentLoaded', () => {
	const randomArray = createRandomArray(RANDOM_SIZE, RANDOM_MIN, RANDOM_MAX)
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
	const sortedArray = bubbleSort(ARRAY)
	visualizeArray(sortedArray)
}

/**
 * Sort random array
 */
function randomSortClick() {
	// removeAllChildNode(arrayContainer)
	const animations = []
	const sortedRandomArray = bubbleSort(RANDOM_ARR, animations)

	for (let i = 0; i < animations.length; i++) {
		const base = animations[i][0]
		const target = animations[i][1]
		setTimeout(() => {
			// Revert colors of previous animation
			if (i !== 0) {
				document.getElementById(
					'index-' + animations[i - 1][0].toString()
				).style.backgroundColor = 'white'
				document.getElementById(
					'index-' + animations[i - 1][1].toString()
				).style.backgroundColor = 'white'
			}

			// Set current colors being compared
			document.getElementById(
				'index-' + base.toString()
			).style.backgroundColor = 'red'
			document.getElementById(
				'index-' + target.toString()
			).style.backgroundColor = 'blue'

			// Indices compared are the same
			if (base === target) {
				document.getElementById(
					'index-' + target.toString()
				).style.backgroundColor = 'purple'
			}
		}, i * ANIMATION_SPEED) // Set timeout shifted by animation speed for each animation
	}

	//	visualizeArray(sortedRandomArray)
}

/**
 * Displays array content in html
 * @param {*} array - array to visualize in html
 */
function visualizeArray(array) {
	// Creates array bar html for every element in the array
	var index = 0
	array.map((element) => {
		var newDiv = document.createElement('hr')
		newDiv.className = 'array-bar'
		newDiv.id = 'index-' + index.toString()
		const elementString = element.toString()
		newDiv.style.height = elementString + 'px'
		newDiv.innerText = elementString
		arrayContainer.appendChild(newDiv)
		index++
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
