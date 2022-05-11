// 1. Jake je osoba od navike.
const HOUR_MILLISECONDS = 86400000 / 24;
const BREAKFAST_TIME = HOUR_MILLISECONDS * 7;
const LUNCH_TIME = HOUR_MILLISECONDS * 12;
const DINNER_TIME = HOUR_MILLISECONDS * 19;

const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const timeSinceMidnight =
	new Date().getTime() - new Date(year, month, day).getTime();

const timeToEat = () => {
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

const millisecondsToTime = (duration) => {
	let minutes = Math.floor((duration / (1000 * 60)) % 60),
		hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
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

console.log(caesarCipher('middle-Out', 2)); // "okffng-Qwv"
console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5)); // "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
console.log(caesarCipher('A friend in need is a friend indeed', 20)); // "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

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

console.log(
	rotateTransform(
		[
			[2, 4],
			[0, 0],
		],
		-3
	)
);

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

console.log(uncensor('Wh*r* d*d my v*w*ls g*?', 'eeioeo')); // "Where did my vowels go?"
console.log(uncensor('abcd', '')); // "abcd"
console.log(uncensor('*PP*RC*S*', 'UEAE')); // "UPPERCASE"
