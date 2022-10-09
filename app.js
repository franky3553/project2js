const pcDecisionAppears = document.getElementById('pc-decision')
const userDecisionAppears = document.getElementById('user-decision')
const outputAppears = document.getElementById('output')
const allDecisions = document.querySelectorAll('button')

let userDecision

allDecisions.forEach(decision => decision.addEventListener('click', (e) => {
	userDecision = e.target.id
	userDecisionAppears.innerHTML = userDecision

}))