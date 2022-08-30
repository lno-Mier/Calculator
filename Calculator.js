let opp;
let result;
function Calculator() {
	let num1 = Number(document.getElementById('num1').value);
	let num2 = Number(document.getElementById('num2').value);
	switch (opp) {
		case '+':
		result = num1 + num2
		alert(result)
		break;
		case '-':
		result = num1 - num2
		alert(result)
		break;
		case '*':
		result = num1 * num2
		alert(result)
		break;
		case '/':
		result = num1 / num2
		alert(result)
		break
	}
}
let plus = document.getElementById('plus')
plus.onclick = function() {
	opp = '+'
	Calculator()
}
let minus = document.getElementById('minus')
minus.onclick = function() {
	opp = '-'
	Calculator()
}
let multiply = document.getElementById('multiply')
multiply.onclick = function() {
	opp = '*'
	Calculator()
}
let divine = document.getElementById('divine')
divine.onclick = function() {
	opp = '/'
	Calculator()
}
