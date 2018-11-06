let addend1 = "923";
let addend2 = "569";

let sumArray = [];


if (addend1.length === addend2.length) {

	let remainder = 0;
	let sum = 0

	for (let i = addend1.length-1; i > -1; i--) {
		sum = Number(addend1[i]) + Number(addend2[i]) + remainder;

		if(sum > 9) {
			remainder = 1;
		} else {
			remainder = 0;
		}

		sumArray.push(String(sum)[remainder]);
	}

	if (remainder === 1) {
		sumArray.push(remainder);
	}

	sum = sumArray.reverse().join("");
	console.log(sum);

} else {
	console.log("Please input 2 numbers with the same length.");
}