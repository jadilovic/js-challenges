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

// console.log(triangle(A));

// 1. Napisati funkciju koja prima broj minuta, a zatim vraca koliko je to u sekundama.
// Funkcija prima cijele kao i decimalne brojeve.
// Primjer:
// Funkciji proslijedimo 1,5 za broj minuta i funkcija nam vraca 90 sekundi.

const toSeconds = (min) => {
	return Math.floor(min * 60);
};

// console.log(toSeconds(1.5));

// 2. Napisati funkciju koja prima neogranicen broj argumenata number tipa podataka te vraca najveci broj.
// Funkcija najmanje mora imati 2 parametra, ali nema gornje granice.
// Primjer:
// Ako se funkcija zove max, poziv bi izgledao ovako: max(2, 7, 4, 6, 9, 12, 5) a funkcija vraca 12.

const max = (...args) => {
	let max = args[0];
	args.forEach((num) => {
		if (num > max) {
			max = num;
		}
	});
	return Math.max(...args);
};

// console.log(max(2, 7, 4, 6, 9, 12, 5));

// 3. Napisati funkciju koja racuna koliko kilometara neko auto moze preci na osnovu nivoa goriva u rezervaru.
// Funkcija prima 2 parametra, nivo goriva u rezervaru u litrima, i potrosnju auta tj koliko litara auto trosi
// na 100 km.
// Primjer:
// Ako je nivo rezervara 20 litara a auto trosi 10 litara na 100 km to znaci da ce auto moci preci 200 km sa
// gorivom u rezervaru.

const kilometraza = (rezervar, potrosnja) => {
	return (rezervar / potrosnja) * 100;
};

// console.log(kilometraza(20, 10));

// 4. Napisati funkciju koja vraca apsolutnu vrijednost nekog broja. NE Koristiti Math.abs().
// Primjer:
// Ako funkciji proslijedimo - 20 vratit ce nam 20.

const toPositive = (num) => {
	return num < 0 ? num * -1 : num;
};

// console.log(toPositive(3));

// 5. Napisati rekurzivnu funkciju koja racuna faktorijel nekog broja. Primjer faktorijela
// broja 5 je: 5 * 4 * 3 * 2 * 1 = 120. Rekurzivna funkcija je funkcija koja poziva samu sebe.

const rekurzija = (num) => {
	if (num === 1) {
		return 1;
	}
	return num * rekurzija(num - 1);
};

// console.log(rekurzija(5));

// 6. Napisati funkciju koja prima 2D niz, zatim ga konvertuje u 1D niz. Ovaj proces se zove: “flattening an
// array”, gdje se smanjuje broj dimenzija niza.
// Primjer:
// 2D niz:
// 1 2 3
// 4 5 6
// 7 8 9
// Funkcija nam vraca 1D niz: 1 2 3 4 5 6 7 8 9

const arr2D = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const flatten = (arr) => {
	const newArr = [];
	arr.forEach((item) => {
		newArr.push(...item);
	});
	return newArr;
};

// console.log(flatten(arr2D));

// 7. Napisati funkciju koja se simulira jednostavan kalkulator. Funkcija prima 3 argumenta, jedan broj,
// znak operacije i drugi broj.
// Primjer:
// Recimo da se funkcija zove calc, poziv funkcije bi izgledao ovako: calc(3, ‘+’, 4) a rezultat bi bio 7.
// Funkcija treba da radi za: +, -, * i /.

const calc = (num1, oper, num2) => {
	switch (oper) {
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return num1 / num2;
		default:
			return 'Wrong operator or 0';
	}
};

// console.log(calc(4, '/', 5));

// 8. Napisati funkciju koja dijeli niz u manje dijelove. Funkcija treba da prima dva argumenta, niz i broj u
// koliko dijelova trebamo podijeliti taj niz.
// Primjer:
// Recimo da se funkcija zove divide, poziv funkcije bi bio divide([1, 2, 3, 4, 5, 6, 7], 3); funkcija ce
// vratiti 2D niz koji izgleda ovako: [ [1, 2, 3 ], [4, 5, 6], [7] ].

const divide = (arr, num) => {
	const newArr = [];
	let count = 0;
	let innerArr = [];
	arr.forEach((item, index) => {
		innerArr.push(item);
		count++;
		if (count === num || arr.length - 1 === index) {
			newArr.push(innerArr);
			innerArr = [];
			count = 0;
		}
	});
	return newArr;
};

// console.log(divide([1, 2, 3, 4, 5, 6, 7], 3));

// 9. Napsati funkciju koja provjerava da li postoji neki element u nizu. Funkcija prima dva parametra, niz koji
//  pretrazujemo i element koji trazimo. Funkcija radi za sve tipove podataka.
// Primjer: recimo da se funkcija zove find, poziv bi izgledao ovako: find([2, 7, 5, 3, 8, 1], 5),
// funckija ce vratiti boolean true jer broj 5 se nalazi u nizu. NE koristiti includes() funkciju.

const find = (arr, element) => {
	if (arr.indexOf(element) >= 0) {
		return true;
	} else {
		return false;
	}
};

// console.log(find([2, 7, 'jku', 3, 8, 1], 'jku'));

// 10. Napisati program koji ispisuje ispod prikazani pattern. Program treba da pita korisnika od koliko redova
// se trokut sastoji.

// 1  2  3  4  5
//    2  3  4  5
//       3  4  5
//          4  5
//             5

const trokut1 = (num) => {
	for (let i = 1; i < num + 1; i++) {
		let row = '';
		for (let j = 1; j < num + 1; j++) {
			if (i < j) {
				row += '  ';
			} else {
				row += j + ' ';
			}
		}
		console.log(row);
	}
};

// trokut1(5);

//   11. Napisati program koji ispisuje 9 x 9 tablicu množenja. Program treba da ispiše tablicu u formatu
//    prikazanom ispod.

//    1   2   3   4   5   6   7   8   9
//    2   x   x   x
//    3   x   x   x
//    4   x   x   x
//    5   x   x   x         …….
//    6   x   x   x
//    7   x   x   x
//    8   x   x   x
//    9   x   x   x

const mnozenje = () => {
	for (let i = 1; i < 10; i++) {
		let row = '';
		for (let j = 1; j < 10; j++) {
			if (i * j < 10) {
				row += ' ' + i * j + ' ';
			} else {
				row += i * j + ' ';
			}
		}
		console.log(row);
	}
};

// mnozenje();

//  12.  Napisati program koji ispisuje Floydov trokut. Program treba da radi za bilo koji broj redova.
// Primjer:
// Floydov trokut sastavljen od 5 redova izgleda ovako:

// 1
// 2        3
// 4        5        6
// 7        8        9        10
// 11       12       13       14      15

const floydTrokut1 = (num) => {
	let count = 1;
	for (let i = 1; i < num + 1; i++) {
		let row = '';
		for (let j = 1; j < num + 1; j++) {
			if (i < j) {
				row += '  ';
			} else {
				if (count < 10) {
					row += ' ' + count + ' ';
				} else {
					row += count + ' ';
				}
				count++;
			}
		}
		console.log(row);
	}
};

// floydTrokut1(5);

//     13.  Napisati program koji za proizvoljni string ispisuje:

// a. broj (procenat) samoglasnika
// b. broj (procenat) suglasnika
// c. broj (procenat) ostalih karaktera

// Koristiti funkcije u rjesavanju ovog zadatka.

const isVowel = (char) => {
	const vowels = ['a', 'i', 'e', 'o', 'u'];
	console.log(char);
	return vowels.includes(char.toLowerCase());
};

const counting = (str) => {
	let vowelCount = 0;
	let consonantCount = 0;
	let otherCount = 0;
	for (const iterator of str) {
		if (iterator.match(/[a-z]/i)) {
			isVowel(iterator) ? vowelCount++ : consonantCount++;
		} else {
			otherCount++;
		}
	}
	console.log(
		`Vowels: ${vowelCount} (${((vowelCount / str.length) * 100).toFixed(2)}%)`
	);
	console.log(
		`Consonants: ${consonantCount} (${(
			(consonantCount / str.length) *
			100
		).toFixed(2)}%)`
	);
	console.log(
		`Vowels: ${otherCount} (${((otherCount / str.length) * 100).toFixed(2)}%)`
	);
};

// counting('hello -');

//       14. Napisati funkciju koja transponuje matricu. Dakle, prvo generisati matricu 3x3 i popuniti
//       nasumicnim brojevima od 0 do 10 a zatim ju ispisati. Sljedeci korak je trasponovanje matrice.
//       Transponovati matricu znaci zamijeniti joj redove i kolone.
// Primjer:
// Ukoliko je matrica:
// 1 2 3
// 4 5 6
// 7 8 9

// Transponovana matrica je:
// 1 4 7
// 2 5 6
// 3 6 9

const transpon = () => {
	const outArr = [];
	let inArr = [];
	let count = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			inArr.push(Math.ceil(Math.random() * 9));
			// inArr.push(++count);
		}
		outArr.push(inArr);
		inArr = [];
	}
	console.log(outArr);
	const transponArr = [];
	inArr = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			inArr.push(outArr[j][i]);
		}
		transponArr.push(inArr);
		inArr = [];
	}
	return transponArr;
};

// console.log(transpon());

//    15. Imamo robota koji hoda po 2D koordinatnoj mreži sa osama x i y.
//       Počinje na (0, 0) tj x = 0 i y = 0 i okrenut je prema sjeveru. Nakon svakog kretanja,
//       robot se rotira za 90 stepeni u smjeru kazaljke na satu. S obzirom na količinu koju je robot
//       pomjerio svaki put, morate izračunati konačnu poziciju robota. Ilustracije radi, ako se robotu daju
//       pokreti 20, 30, 10, 40 onda će se kretati: 20 koraka sjeverno, sada na (0, 20) 30 koraka istočno,
//       sada na (30, 20) 10 koraka južno. sada u (30, 10) 40 koraka zapadno, sada na (-10, 10)
//       ...i završit će na koordinatama (-10, 10).

const coordinates = (...args) => {
	let x = 0;
	let y = 0;
	let count = 0;
	args.forEach((element) => {
		if (count > 3) {
			count = 0;
		}
		if (count === 0) {
			y += element;
		} else if (count === 1) {
			x += element;
		} else if (count === 2) {
			y -= element;
		} else {
			x -= element;
		}
		count++;
	});
	console.log(x, y);
};

// coordinates(20, 30, 10, 40, 30, 20);

//       16. Imamo masinu koja sitni novac. Obzirom da odredjenu kolicinu novca mozemo podijeliti na vise
//       nacina, nas program za ovu masinu bi trebao da ispise sve moguce opcije. Koristiti novcanice
//       konvertibilne marke s tim da se ne koristi manja novcanica od 5 KM.
// Primjer: 20 KM bi se moglo usitniti na sljedece nacine:
// 2 x 10KM, 4 x 5KM, 1 x 10KM + 2 x 5KM.
// Napisati funkciju koja prima jedan parametar, kolicinu novca, zatim funkcija ispisuje sve moguce opcije za
// tu kolicinu novca.

const change = (amount) => {
	const options = [];
	let hundreds = Math.floor(amount / 100);
	let fifties = Math.floor(amount / 50);
	let twenties = Math.floor(amount / 20);
	let tens = Math.floor(amount / 10);
	let fives = Math.floor(amount / 5);

	options.push(`${hundreds} x 100`);
	options.push(`${fifties} x 50`);
	options.push(`${twenties} x 20`);
	options.push(`${tens} x 10`);
	options.push(`${fives} x 5`);
	console.log(amount % 100);
	console.log(options);
};

// change(55);

//      17. Napisati funkciju koja validira broj telefona. Funkcija treba da prima string tj broj telefona,
//       a vraca true ili false zavisno od toga da li je broj telefona ispravan. Broj telefona da bi bio
//       ispravan mora biti u jednom od 2 sljedeca formata: 06x/xxx-xxx ili 060/xx-xx-xxx.

const format1 = (number) => {
	if (number.length !== 11) {
		return false;
	}
	if (number.substring(0, 2) !== '06') {
		return false;
	}
	if (number.indexOf('/') !== 3) {
		return false;
	}
	if (number.indexOf('-') !== 7) {
		return false;
	}
	return true;
};

const format2 = (number) => {
	if (number.length !== 13) {
		console.log('ovaj');
		return false;
	}
	if (number.substring(0, 3) !== '060') {
		return false;
	}
	if (number.indexOf('/') !== 3) {
		return false;
	}
	if (number.indexOf('-') !== 6) {
		return false;
	}
	if (number.lastIndexOf('-') !== 9) {
		number.lastIndexOf();
		return false;
	}
	return true;
};
const validation = (phoneNumber) => {
	return format1(phoneNumber) || format2(phoneNumber);
};

// console.log(validation('060/xx-xx-xxx'));

//  18. Napisati funkciju koja provjerava da li cijeli broj ima tacno 3 djelioca, i vraca true ukoliko broj
//       ima tacno 3 djelioca a false u suprotnom. Npr broj 4 ima tacno 3 djelioca: 1, 2 i 4. Zatim ispisati
//       prvih 20 brojeva koji imaju tacno 3 djelioca.

const checkDividers = (num) => {
	let djelioca = 0;
	for (let i = 0; i <= num; i++) {
		if (num % i === 0) {
			djelioca++;
		}
	}
	return djelioca === 3 ? true : false;
};

const djelioci = () => {
	let countList = [];
	let number = 4;
	while (countList.length < 20) {
		const hasThreeDiv = checkDividers(number);
		if (hasThreeDiv) {
			countList.push(number);
		}
		number++;
	}
	console.log(countList);
};

// djelioci();

//     19. Napisati funkciju koja provjerava da li string sadrzi brojeve i slova naizmjenicno. Funkcija prima
//       string a vraca true ili false zavisno toga da li su brojevi i slova naizmjenicni.
//       Npr. za string: “a1b2c3d4” vraca true, a za string “a12b3c4d” vraca false jer imamo dva broja(1i2)
//       jedan pored drugog.

const numsLetters = (str) => {
	const strArr = str.split('');
	for (let i = 0; i < strArr.length; i++) {
		if (isNaN(strArr[i]) === isNaN(strArr[i + 1])) {
			return false;
		}
	}
	return true;
};

// console.log(numsLetters('a1b24c3d4'));

// 1. Napisati program koji razdvaja parne i neparne elemente u nizu. Program
// prvo generise niz od 10 elemenata popunjen nasumicnim brojevima od 1 do
// 20. Zatim, program treba da prebaci sve parne brojeve na lijevu stranu,
// a sve neparne brojeve na desnu stranu tako da postoji jasna granica
// izmedju parnih i neparnih brojeva.
// Npr:
// Imamo niz: [1, 7, 4, 8, 3, 6, 12], kada se razdvoje parni i neparni brojevi niz izgleda
// ovako: [4, 8, 6, 12, 1, 7, 3]

const parNepar = () => {
	const numArr = [];
	for (let i = 0; i < 10; i++) {
		numArr.push(Math.ceil(Math.random() * 20));
	}
	const parni = [];
	const neparni = [];
	numArr.forEach((number) => {
		if (number % 2 === 0) {
			parni.push(number);
		} else {
			neparni.push(number);
		}
	});
	console.log(parni.concat(neparni));
};

// parNepar();

// 2. Za dati string, kreirajte funkciju koja kreira niz, dekonstruise i
// konstruise string slovo po slovo. Pogledajte primjer u nastavku za neke
// korisne smjernice: constructDeconstruct("Hello") ➞ [
// "H", "He", "Hel", "Hell", "Hello", "Hell", "Hel", "He", "H"
// ]

const constructDeconstruct = (str) => {
	const strArr = str.split('');
	const arr = [];
	for (let i = 0; i < str.length; i++) {
		arr.push(str.substring(0, i + 1));
	}
	for (let i = str.length - 2; i > -1; i--) {
		arr.push(str.substring(0, i + 1));
	}
	console.log(arr);
};

// constructDeconstruct('Hello');

// 3. Napisati funkciju koja nalazi zadnji index na kojem se nalazi odredjeni
// broj. Funkcija treba da prima niz koji pretrazuje i element koji trazi.
// Funkcija vraca zadnji index na kojem se broj nalazi. Npr: imamo niz:
// [2, 4, 5, 6, 7, 2 ,4] i trazimo broj 2. Funkcija ce nam vratiti 5 jer je
// 5 zadnji index na kojem se nalazi broj 2. Ukoliko broj koji trazimo ne
// postoji u nizu, funkcija vraca -1.

const last = (arr, element) => {
	return arr.lastIndexOf(element);
};

// console.log(last([2, 4, 5, 6, 7, 2, 4], 99));

// 4. Napisati program koji pronalazi elemente koji su zajednicki za 2 niza. Generisati 2 niza duzine 10 i
// popuniti nasumicnim brojevima od 10 do 100. Funkcija treba da prima ova dva niza, te da vrati novi niz
// popunjen brojevima koji su zajednicki za oba niza. Npr: Imamo nizove: [1, 2, 3, 4] i [0, 2, 4, 6],
// funkcija nam vraca ovaj niz: [ 2, 4 ].
