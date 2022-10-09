// Basic const section

const pcDecisionAppears = document.getElementById('pc-decision')
const userDecisionAppears = document.getElementById('user-decision')
const outputAppears = document.getElementById('output')
const allDecisions = document.querySelectorAll('button')

// Variables section

let userDecision
let pcDecision
let output

// Main Function (allDecisions)

allDecisions.forEach(decision => decision.addEventListener('click', (e) => {
	userDecision = e.target.id
	userDecisionAppears.innerHTML = userDecision

   makePcDecision()
   getOutput()

}))

// PC decision function

function makePcDecision() {
	const randomNumber = Math.floor(Math.random() * 3) + 1	
	
	if (randomNumber === 0) {
		pcDecision = 'rock'
	}

	if (randomNumber === 1) {
		pcDecision = 'paper'
	}

	if (randomNumber === 2) {
		pcDecision = 'scissors'
	}
	
	pcDecisionAppears.innerHTML = pcDecision
}

// Combination gestor function

function getOutput() {
	if (userDecision === pcDecision) {
		output = 'DRAW'
	}

	if (userDecision === 'rock' && pcDecision === 'paper') {
		output = 'pc WINs'
	}

	if (userDecision === 'rock' && pcDecision === 'scissors') {
		output = 'you WIN'
	}

	if (userDecision ==='paper' && pcDecision === 'rock') {
		output = 'you WIN'
	}

	if (userDecision ==='paper' && pcDecision === 'scissors') {
		output = 'pc WINs'
	}

	if (userDecision ==='scissors' && pcDecision === 'rock') {
		output = 'pc WINs'
	}

	if (userDecision ==='scissors' && pcDecision === 'paper') {
		output = 'you WIN'
	}

	outputAppears.innerHTML = output
}
