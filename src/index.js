module.exports = function reverse(n) {
	let result = String(n)
	return Number(result.split('').reverse().join('').slice(0, 3));
}
