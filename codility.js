console.log('test');
// const A = [1, 2, 3, 5, -1];

function solution(A) {
	let newA = A.sort(function (a, b) {
		return a - b;
	});
	newA = [...new Set(newA)];
	let min = 0;

	if (newA[0] < 1) {
		min = 1;
	} else {
		let count = newA[0];
		for (let index = 0; index < newA.length; index++) {
			if (newA[index] !== count) {
				min = count;
			} else {
				min = count + 1;
			}
			count++;
		}
	}
	return min;
}

// console.log(solution(A));

function solutionB(A) {
	var notNegative = [];

	for (var index = 0; index < A.length; index++) {
		if (A[index] > 0) {
			notNegative[A[index]] = true;
		}
	}

	console.log(notNegative);

	for (index = 1; index <= notNegative.length; index++) {
		if (!notNegative[index]) {
			return index;
		}
	}
	return 1;
}

// console.log(solutionB(A));

// FrogJmp
function distance(X, Y, D) {
	// let count = 0;
	// while (X <= Y) {
	// 	X += D;
	// 	count++;
	// }
	// return count;
	return Math.ceil((Y - X) / D);
}

// console.log(distance(10, 85, 30));

// Missing element
const C = [-3, -2, 0, 2, 3, 1, 5];

const missingElement = (A) => {
	const notNegative = [];
	for (var index = 0; index < A.length; index++) {
		// if (A[index] > 0) {
		notNegative[A[index]] = true;
		// }
	}

	for (index = 1; index <= notNegative.length; index++) {
		if (!notNegative[index]) {
			return index;
		}
	}
};

// console.log(missingElement(C));

// triangle
const A = [10, 2, 5, 1, 8, 20];

const triangle = (A) => {
	A.sort(function (a, b) {
		return a - b;
	});

	for (let index = 0; index < A.length - 2; index++) {
		const P = index;
		const Q = index + 1;
		const R = index + 2;
		const con1 = A[P] + A[Q] > A[R];
		const con2 = A[Q] + A[R] > A[P];
		const con3 = A[R] + A[P] > A[Q];
		if (con1 && con2 && con3) {
			return 1;
		}
	}
	return 0;
};

console.log(triangle(A));
