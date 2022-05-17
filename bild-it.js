// 1. Jake je osoba od navike.
const HOUR_MILLISECONDS = 86400000 / 24;
const BREAKFAST_TIME = HOUR_MILLISECONDS * 7;
const LUNCH_TIME = HOUR_MILLISECONDS * 12;
const DINNER_TIME = HOUR_MILLISECONDS * 19;

const timeToEat = () => {
	const day = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();
	const timeSinceMidnight =
		new Date().getTime() - new Date(year, month, day).getTime();
	if (timeSinceMidnight <= BREAKFAST_TIME) {
		return millisecondsToTime(BREAKFAST_TIME - timeSinceMidnight);
	} else if (timeSinceMidnight <= LUNCH_TIME) {
		return millisecondsToTime(LUNCH_TIME - timeSinceMidnight);
	} else if (timeSinceMidnight <= DINNER_TIME) {
		return millisecondsToTime(DINNER_TIME - timeSinceMidnight);
	} else {
		return millisecondsToTime(86400000 - timeSinceMidnight + BREAKFAST_TIME);
	}
};
// two functions and string time, pure functions
const millisecondsToTime = (duration) => {
	const minutes = Math.floor((duration / (1000 * 60)) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
	return [hours, minutes];
};

console.log(timeToEat());

// 2. Julie Cezar

const getNewCapitalLetter = (asciiNum, keyNumber) => {
	let newAsciiNum = asciiNum + keyNumber;
	if (newAsciiNum > 90) {
		newAsciiNum = 65 + (newAsciiNum - 91);
	}
	return String.fromCharCode(newAsciiNum);
};

const getNewLowerCaseLetter = (asciiNum, keyNumber) => {
	let newAsciiNum = asciiNum + keyNumber;
	if (newAsciiNum > 122) {
		newAsciiNum = 97 + (newAsciiNum - 123);
	}
	return String.fromCharCode(newAsciiNum);
};

// possible isLetter

const caesarCipher = (text, keyNumber) => {
	const textArr = text.split('');
	for (let index = 0; index < textArr.length; index++) {
		let newChar = '';
		const asciiNum = textArr[index].charCodeAt(0);
		if (asciiNum >= 65 && asciiNum <= 90) {
			newChar = getNewCapitalLetter(asciiNum, keyNumber);
		} else if (asciiNum >= 97 && asciiNum <= 122) {
			newChar = getNewLowerCaseLetter(asciiNum, keyNumber);
		} else {
			newChar = textArr[index];
		}
		textArr[index] = newChar;
	}
	return textArr.join('');
};

// console.log(caesarCipher('middle-Out', 2)); // "okffng-Qwv"
// console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5)); // "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
// console.log(caesarCipher('A friend in need is a friend indeed', 20)); // "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

// 3. Kreirajte funkciju za rotaciju dvodimenzionalne matrice

const rotateTransform = (arr, rotationNum) => {
	for (let i = 0; i < Math.abs(rotationNum); i++) {
		if (rotationNum > 0) {
			let temp = arr[0][0];
			arr[0][0] = arr[1][0];
			let temp2 = arr[0][1];
			arr[0][1] = temp;
			arr[1][0] = arr[1][1];
			arr[1][1] = temp2;
		} else {
			let temp = arr[0][0];
			arr[0][0] = arr[0][1];
			let temp2 = arr[1][0];
			arr[1][0] = temp;
			arr[0][1] = arr[1][1];
			arr[1][1] = temp2;
		}
	}
	return arr;
};

// console.log(
// 	rotateTransform(
// 		[
// 			[2, 4],
// 			[0, 0],
// 		],
// 		-3
// 	)
// );

// 4. Neko je pokusao cenzurirati moje stringove zamjenom svakog samoglasnika sa zvjezdicon (*)

const uncensor = (text, vowels) => {
	const textArr = text.split('');
	const vowelsArr = vowels.split('');
	for (let i = 0; i < textArr.length; i++) {
		if (textArr[i] === '*') {
			textArr[i] = vowelsArr.shift();
		}
	}
	return textArr.join('');
};

// console.log(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo')); // "Where did my vowels go?"
// console.log(uncensor('abcd', '')); // "abcd"
// console.log(uncensor('*PP*RC*S*', 'UEAE')); // "UPPERCASE"

// Codility Exercise 3 - Socks Laundering

const K = 2,
	C = [1, 1, 3, 4],
	D = [3, 3, 3, 5];

const toWash = (K, C, D) => {
	if (K < 1) {
		return 0;
	}
	const sortedC = C.sort((a, b) => a - b);
	const sortedD = D.sort((a, b) => a - b);

	let count = 0;
	for (let i = 0; i < D.length; i++) {
		if (sortedC.includes(D[i])) {
			C.push(D[i]);
			count++;
		}
		if (count > K - 1) {
			break;
		}
	}
	// console.log(C);
	if (count < K - 2) {
		for (let i = 0; i < D.length - 1; i++) {
			if (D.indexOf(D[i] !== D.lastIndexOf(D[i + 1]))) {
				C.push(D[i]);
				count++;
				C.push(D[i]);
				count++;
			}
			if (count > K - 1) {
				break;
			}
		}
	}

	let pairsNumber = {};
	const newC = C.sort((a, b) => a - b);
	// console.log(newC);
	for (let i = 0; i < newC.length; i++) {
		if (newC.indexOf(newC[i] !== newC.lastIndexOf(newC[i + 1]))) {
			if (pairsNumber[newC[i]] >= 0) {
				pairsNumber[newC[i]]++;
			} else {
				pairsNumber[newC[i]] = 1;
			}
		}
	}

	let total = 0;
	for (const key in pairsNumber) {
		total += Math.floor(pairsNumber[key] / 2);
	}
	return total;
};

// console.log(toWash(K, C, D));

// You would like to set a password for a bank account. However, there are three restrictions on the format of
// the password:

// it has to contain only alphanumerical characters (a−z, A−Z, 0−9);
// there should be an even number of letters;
// there should be an odd number of digits.
// You are given a string S consisting of N characters. String S can be divided into words by splitting it at,
//  and removing, the spaces. The goal is to choose the longest word that is a valid password. You can assume
//  that if there are K spaces in string S then there are exactly K + 1 words.

// For example, given "test 5 a0A pass007 ?xy1", there are five words and three of them are valid passwords: "5",
//  "a0A" and "pass007". Thus the longest password is "pass007" and its length is 7. Note that neither "test"
//  nor "?xy1" is a valid password, because "?" is not an alphanumerical character and "test" contains an even
//  number of digits (zero).

// Write a function:

// function solution(S);

// that, given a non-empty string S consisting of N characters, returns the length of the longest word from
//  the string that is a valid password. If there is no such word, your function should return −1.

// For example, given S = "test 5 a0A pass007 ?xy1", your function should return 7, as explained above.

// Assume that:

// N is an integer within the range [1..200];
// string S consists only of printable ASCII characters and spaces.
// In your solution, focus on correctness. The performance of your solution will not be the focus of the
// assessment.

const validPassword = (pass) => {
	const passArr = pass.split(' ');
	const isAlfaNum = (str) => {
		var code, i, len;
		for (i = 0, len = str.length; i < len; i++) {
			code = str.charCodeAt(i);
			if (
				!(code > 47 && code < 58) && // numeric (0-9)
				!(code > 64 && code < 91) && // upper alpha (A-Z)
				!(code > 96 && code < 123)
			) {
				// lower alpha (a-z)
				return false;
			}
		}
		return true;
	};

	const lettersNums = (str) => {
		const strArr = str.split('');
		let countNum = 0;
		let countLet = 0;
		for (let i = 0; i < strArr.length; i++) {
			if (isNaN(strArr[i])) {
				countLet++;
			} else {
				countNum++;
			}
		}
		return countLet % 2 === 0 && countNum % 2 !== 0;
	};

	let maxWord = 0;
	passArr.forEach((element) => {
		if (isAlfaNum(element)) {
			if (lettersNums(element)) {
				if (element.length > maxWord) {
					maxWord = element.length;
				}
			}
		}
	});
	if (maxWord === 0) {
		return -1;
	}
	return maxWord;
};

// console.log(validPassword('test 5 a0A pass007 ?xy1 hello34562h'));

// You are helping a geologist friend investigate an area with mountain lakes. A recent heavy rainfall has
// flooded these lakes and their water levels have reached the highest possible point. Your friend is
//  interested to know the maximum depth in the deepest part of these lakes.

// We simplify the problem in 2-D dimensions. The whole landscape can be divided into small blocks and
// described by an array A of length N. Each element of A is the altitude of the rock floor of a block
// (i.e. the height of this block when there is no water at all). After the rainfall, all the low-lying
//  areas (i.e. blocks that have higher blocks on both sides) are holding as much water as possible. You
//  would like to know the maximum depth of water after this entire area is flooded. You can assume that the
//   altitude outside this area is zero and the outside area can accommodate infinite amount of water.

// For example, consider array A such that:

//     A[0] = 1
//     A[1] = 3
//     A[2] = 2
//     A[3] = 1
//     A[4] = 2
//     A[5] = 1
//     A[6] = 5
//     A[7] = 3
//     A[8] = 3
//     A[9] = 4
//     A[10] = 2
// The following picture illustrates the landscape after it has flooded:

// The gray area is the rock floor described by the array A above and the blue area with dashed lines
// represents the water filling the low-lying areas with maximum possible volume. Thus, blocks 3 and 5
// have a water depth of 2 while blocks 2, 4, 7 and 8 have a water depth of 1. Therefore, the maximum water
//  depth of this area is 2.

// Write a function:

// function solution(A);

// that, given a non-empty array A consisting of N integers, returns the maximum depth of water.

// Given array A shown above, the function should return 2, as explained above.

// For the following array:

//     A[0] = 5
//     A[1] = 8
// the function should return 0, because this landscape cannot hold any water.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..100,000,000].

const arrWater = [1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2];
const deepest = (arr) => {
	let max = arr[0],
		max2 = arr[0],
		countIncrease = 0,
		min = arr[0],
		maxDeep = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			if (countIncrease > 0) {
				max2 = arr[i];
			} else {
				max = arr[i];
			}
			countIncrease++;
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		if (countIncrease > 1) {
			if (max - min > maxDeep) {
				maxDeep = max - min;
			}
			countIncrease = 0;
			min = arr[i];
			max = max2;
		}
	}
	return maxDeep;
};

console.log(deepest(arrWater));
