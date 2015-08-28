/*solution to proble #1*/

var sum = 0;

var solution = function(input) {
	for (var i = 0; i < input; i++) {
		if (i % 3 === 0) {
			sum += i;
		}
		else if (i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
};

solution(1000);

/*solution to problem #2 */
var x = 1;
var y = 2;
var z = 0;
var sum = 0;

while (x < 4000000) {
	if (x % 2 === 0) {
		sum += x;
	}
	z = x + y;
	x = y;
	y = z;
}

console.log(sum);


/*solution to problem #3*/
function isPrime(number) {
	for (var i = 2; i < number; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

var testNumber = 600851475143;

for (j = 2; j < testNumber; j++) {
	if (testNumber % j === 0 && isPrime(j)) {
		x = j;
	}
}

console.log(x);