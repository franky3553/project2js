const pcDecisionAppears = document.getElementById('pc-decision')
const userDecisionAppears = document.getElementById('user-decision')
const outputAppears = document.getElementById('output')
const allDecisions = document.querySelectorAll('button')

let userDecision
let pcDecision

allDecisions.forEach(decision => decision.addEventListener('click', (e) => {
	userDecision = e.target.id
	userDecisionAppears.innerHTML = userDecision

   makePcDecision()

}))


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