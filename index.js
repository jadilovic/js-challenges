console.log('test aki');

const overloading = (param) => {
	if (typeof param === 'string') {
		console.log(param);
	} else {
		console.log(typeof param);
	}
};

overloading(Object.prototype.toString.call([1, 2]));
console.log(Array.isArray([]));
console.log(Number.parseInt(3.5));

const isInt = (num) => {
	if (num % 1 === 0) {
		return true;
	} else {
		return false;
	}
};

function private() {
	var text = 'secret';
	return function () {
		return text;
	};
}

console.log(private()());

const funci = private();
console.log(funci());

console.log('integer : ', isInt(3.6));

const findVowels = (str) => {
	let count = 0;
	const vowelsArr = ['a', 'i', 'e', 'o', 'u'];
	for (const char of str.toLowerCase()) {
		if (vowelsArr.includes(char)) {
			count++;
		}
	}
	return count;
};

const objFun = (objEle) => {
	let sum = 0;
	if (Object.prototype.toString.call(objEle) === '[object Array]') {
		console.log('arr');
		objEle.forEach((element) => {
			sum += element;
		});
	} else if (typeof objEle === 'object') {
		console.log('obj');
		for (const key in objEle) {
			sum += Number(objEle[key]);
		}
	} else {
		return 'Not object or array';
	}
	return sum;
};

let arr = [1, 2, 3, 4, 4, 6, 7, 8, 8, 9, 9, 2, 1];
let obj = { first: '1', second: '2', third: '3' };
console.log('objFun : ', objFun(obj));
console.log(findVowels('Hellow there'));
console.log(typeof obj);

const arrSecond = arr;
arr.push(4);
arr.unshift(0);
console.log(arr.splice(3, 5, 6, 7));
console.log(arrSecond);

const createBase = (num) => {
	return (num2) => {
		return num + num2;
	};
};
var addSix = createBase(6);
console.log(createBase(9)(9));
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

for (let index = 0; index < 100; index++) {
	if (index % 3 === 0 && index % 5 === 0) {
		console.log('fizz_buzz');
	} else if (index % 5 === 0) {
		console.log('buzz');
	} else if (index % 3 === 0) {
		console.log('fizz');
	} else {
		console.log(index);
	}
}

const heroes = [
	{ name: 'boby', family: 'smith', age: 3 },
	{ name: 'boby', family: 'smith', age: 5 },
	{ name: 'boby', family: 'smith', age: 3 },
	{ name: 'boby', family: 'smith', age: 3 },
	{ name: 'boby', family: 'smith', age: 3 },
];

const newHeroes = heroes.map((hero) => {
	return { ...hero, name: hero.name.toUpperCase() };
});

console.log(heroes);
console.log(newHeroes);

const unique = [];
arr.forEach((element) => {
	if (unique.indexOf(element) === -1) {
		unique.push(element);
	}
});

console.log('unique : ', unique);

const p = new Promise((resolve, reject) => {
	const a = 1 + 9;
	if (a == 2) {
		resolve('Good calculation');
	} else {
		reject('Bad calculation');
	}
})
	.then(
		(message) => console.log(message),
		() => {
			console.log('second - 1');
			return reject('bad calc');
		}
	)
	.then(
		() => console.log('first'),
		() => console.log('second - 2')
	)
	.catch((err) => console.log(err))
	.finally((fin) => console.log('completed ' + fin));

const userLeft = false;
const userWatching = true;

function watchingTV(callBack, errorCall) {
	if (userLeft) {
		errorCall({
			name: 'Boby',
			message: 'Left the building',
		});
	} else if (userWatching) {
		errorCall({
			name: 'Steve',
			message: 'Hppy watching cat',
		});
	} else {
		callBack('Success');
	}
}

// watchingTV(
// 	(message) => console.log('Happy end : ' + message),
// 	(msgObj) => console.log(`${msgObj.name} ${msgObj.message}`)
// );

function promiseWatch() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: 'resolve promise Boby',
				message: 'Left the building',
			});
		} else if (userWatching) {
			reject({
				name: 'reject promise Cat',
				message: 'Hppy watching cat',
			});
		} else {
			resolve('Promise Success');
		}
	});
	// .then((message) => console.log('Happy end : ' + message))
	// .catch((err) => console.log(`${err.name} ${err.message}`))
	// .finally(() => console.log('by by'));
}

// promiseWatch()
// 	.then((message) => console.log(message))
// 	.catch((err) => console.log(err))
// 	.finally(() => console.log('finally promise'));

let digits = [6, 1, 4, 5, 3, 9];

// digits = digits.join('');
// digits = Number(digits) + 1;
// digits = digits.toString().split('');
// digits.forEach((element, index) => (digits[index] = Number(element)));
console.log(digits.reverse());

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	let carry = 0;

	const reversedIncrementedDigits = digits.reverse().map((digit, index) => {
		const incrementedDigit = index === 0 ? digit + 1 + carry : digit + carry;
		carry = incrementedDigit >= 10 ? 1 : 0;
		return incrementedDigit % 10;
	});
	if (carry === 1) {
		reversedIncrementedDigits.push(1);
	}
	return reversedIncrementedDigits.reverse();
};

const vowel = ['a', 'i', 'e', 'o', 'u'];

const checkVowels = (text) => {
	let count = 0;
	for (const char of text) {
		if (vowel.includes(char)) {
			count++;
		}
	}
	return count;
};
console.log(checkVowels('hello there boy'));
