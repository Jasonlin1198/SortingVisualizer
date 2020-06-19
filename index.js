import {
	bubbleSort,
	insertionSort,
	selectionSort,
	mergeSort,
} from './sortingAlgorithms.js'

// Input html elements
let inputText = document.getElementById('arrayInput')
let inputResult = document.getElementById('displayInput')
let inputButton = document.getElementById('submit')
inputButton.addEventListener('click', inputClick)

let inputHeading = document.getElementById('inputHeading')

// Optimal sort html elements
let bubbleSortDiv = document.getElementById('bubbleSort')
let insertionSortDiv = document.getElementById('insertionSort')
let mergeSortDiv = document.getElementById('mergeSort')

// Array sort visual html element
let arrayContainer = document.getElementById('arrayContainer')

let randomArrayButton = document.getElementById('randomArray')
randomArrayButton.addEventListener('click', generateRandomArray)

let bubbleSortButton = document.getElementById('bubbleSortButton')
bubbleSortButton.addEventListener('click', bubbleSortClick)

let insertionSortButton = document.getElementById('insertionSortButton')
insertionSortButton.addEventListener('click', insertionSortClick)

let selectionSortButton = document.getElementById('selectionSortButton')
selectionSortButton.addEventListener('click', selectionSortClick)

let mergeSortButton = document.getElementById('mergeSortButton')
mergeSortButton.addEventListener('click', mergeSortClick)

let runtimeDiv = document.getElementById('runtime')
let slider = document.getElementById('myRange')

// Initilze Arrays
let ARRAY = []
let RANDOM_SIZE = 20
let RANDOM_MIN = 10
let RANDOM_MAX = 150

// Animation settings
let ANIMATION_SPEED = 10
let FINISHED_ANIMATION = true

slider.oninput = function () {
	RANDOM_SIZE = this.value
	generateRandomArray()
}

// Web page loaded functionality
addEventListener('DOMContentLoaded', () => {
	generateRandomArray()
})

/**
 *  OnClick for input array button
 */
function inputClick() {
	if (FINISHED_ANIMATION === false) {
		return
	}
	// Clear result content if input is valid
	if (inputText.value) {
		inputResult.textContent = 'Your Array = '
		bubbleSortDiv.textContent = 'Bubble Sort: '
		insertionSortDiv.textContent = 'Insertion Sort: '
		mergeSortDiv.textContent = 'Merge Sort: '
	} else {
		// Remove current error message if displayed
		if (inputHeading.childNodes[6]) {
			inputHeading.removeChild(inputHeading.childNodes[6])
		}
		let inputError = document.createElement('div')
		inputError.innerText = 'Please enter valid array'
		inputHeading.appendChild(inputError)
		return
	}
	// If current input is valid, remove error message if displayed
	if (inputHeading.childNodes[6]) {
		inputHeading.removeChild(inputHeading.childNodes[6])
	}
	removeAllChildNode(arrayContainer)

	// Remove non-numberic characters from input
	let filteredArray = inputText.value.split(',').filter((char) => {
		return char !== ',' ? true : false
	})
	// Append parsed input array
	filteredArray.map((element) => {
		inputResult.textContent += element + ' '
	})

	// Convert string element to int
	for (let x = 0; x < filteredArray.length; x++) {
		filteredArray[x] = parseInt(filteredArray[x], 10)
	}

	// Initialize global array as input array - filteredArray is changed as a reference in below sorts
	ARRAY = filteredArray
	// Display input array if valid array of numbers -- NaN when no input
	if (!isNaN(ARRAY[0])) {
		visualizeArray(ARRAY)
	}

	// Sorting Algorithms to copies of filteredArrays
	let bubbleSorted = bubbleSort(filteredArray, [], [])
	let insertionSorted = insertionSort(filteredArray, [], [])
	let mergeSorted = mergeSort(filteredArray, [], [])

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
 * Performs sorting algorithm and computes animation and swapping with timings
 * @param {*} sortingAlg - sorting algorithm that sets animations
 * @param {*} arr - array to be sorted
 */
const performAnimations = (sortingAlg, arr) => {
	const animations = []
	const swapAnimations = []
	sortingAlg(arr, animations, swapAnimations)
	for (let i = 0; i < animations.length; i++) {
		const base = animations[i][0]
		const target = animations[i][1]
		setTimeout(() => {
			// Revert colors of previous animation if non-null
			if (
				i !== 0 &&
				document.getElementById('index-' + animations[i - 1][0].toString()) &&
				document.getElementById('index-' + animations[i - 1][1].toString())
			) {
				document.getElementById(
					'index-' + animations[i - 1][0].toString()
				).style.backgroundColor = 'white'
				document.getElementById(
					'index-' + animations[i - 1][1].toString()
				).style.backgroundColor = 'white'
			}
			// Current target and base html elements
			const baseElement = document.getElementById('index-' + base.toString())
			const targetElement = document.getElementById(
				'index-' + target.toString()
			)
			// Set current colors being compared if non-null
			if (baseElement && targetElement) {
				baseElement.style.backgroundColor = '#fc2003'
				targetElement.style.backgroundColor = '#0356fc'

				// Swap occurs between base and target
				if (swapAnimations[i]) {
					const tempHeight = baseElement.style.height
					const tempText = baseElement.innerText
					baseElement.style.height = targetElement.style.height
					baseElement.innerText = targetElement.innerText
					targetElement.style.height = tempHeight
					targetElement.innerText = tempText
				}
			}
			// Indices compared are the same
			if (
				base === target &&
				document.getElementById('index-' + target.toString())
			) {
				document.getElementById(
					'index-' + target.toString()
				).style.backgroundColor = 'purple'
			}

			// Check lengths of arrays are equal
			if (animations.length !== swapAnimations.length) {
				console.log(animations.length)
				console.log(swapAnimations.length)
			}
		}, i * ANIMATION_SPEED) // Set timeout shifted by animation speed for each animation
	}

	// Prevent click before current animation is complete
	setTimeout(() => {
		// Set all colors to finished
		for (let j = 0; j < arr.length; j++) {
			document.getElementById('index-' + j.toString()).style.backgroundColor =
				'#0da636'
		}
		FINISHED_ANIMATION = true
		runtimeDiv.innerText =
			'Runtime: ' + (animations.length * ANIMATION_SPEED).toString() + ' ms'
	}, animations.length * ANIMATION_SPEED)
}

/**
 * Displays array content in html
 * @param {*} array - array to visualize in html
 */
function visualizeArray(array) {
	// Creates array bar html for every element in the array
	var index = 0
	let width = 68 / array.length
	array.map((element) => {
		var newDiv = document.createElement('hr')
		newDiv.className = 'array-bar'
		newDiv.id = 'index-' + index.toString()
		const elementString = element.toString()
		newDiv.style.height = elementString + 'px'
		newDiv.innerText = elementString
		newDiv.style.width = width.toString() + '%'
		arrayContainer.appendChild(newDiv)
		index++
	})
}

/**
 * Generates random array to display
 */
function generateRandomArray() {
	if (FINISHED_ANIMATION === true) {
		removeAllChildNode(arrayContainer)
		const randomArray = createRandomArray(RANDOM_SIZE, RANDOM_MIN, RANDOM_MAX)
		visualizeArray(randomArray)
		ARRAY = randomArray
	}
}

/**
 * Sort random array using insertion sort
 */
function mergeSortClick() {
	if (FINISHED_ANIMATION === true) {
		FINISHED_ANIMATION = false
		removeAllChildNode(arrayContainer)
		visualizeArray(ARRAY)
		performAnimations(mergeSort, ARRAY)
	}
}

function selectionSortClick() {
	if (FINISHED_ANIMATION === true) {
		FINISHED_ANIMATION = false
		removeAllChildNode(arrayContainer)
		visualizeArray(ARRAY)
		performAnimations(selectionSort, ARRAY)
	}
}

/**
 * Sort random array using insertion sort
 */
function insertionSortClick() {
	if (FINISHED_ANIMATION === true) {
		FINISHED_ANIMATION = false
		removeAllChildNode(arrayContainer)
		visualizeArray(ARRAY)
		performAnimations(insertionSort, ARRAY)
	}
}

/**
 * Sort random array
 */
function bubbleSortClick() {
	if (FINISHED_ANIMATION === true) {
		FINISHED_ANIMATION = false
		removeAllChildNode(arrayContainer)
		visualizeArray(ARRAY)
		performAnimations(bubbleSort, ARRAY)
	}
}

/**
 * Removes all html children from parent
 * @param {*} parent - parent html element
 */
function removeAllChildNode(parent) {
	// Clear runtime div
	runtimeDiv.innerText = ''
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
	return array
}
