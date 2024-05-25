function randomBigIntFromInterval(min: bigint, max: bigint): bigint {
    const range = max - min + BigInt(1);
    const randomNumber = BigInt(Math.floor(Number(range) * Math.random()));
    return min + randomNumber;
}

function gcd(a: bigint, b: bigint): bigint {
    if (b === BigInt(0)) {
        return a;
    } else { // Otherwise, recursively compute the GCD
        return gcd(b, a % b);
    }
}

function chooseE(totient: bigint): bigint {
    let e: bigint = BigInt(0);
    do {
        e = randomBigIntFromInterval(BigInt(2), totient - BigInt(1)) as bigint;
    } while (gcd(e, totient) !== BigInt(1));
    return e;
}

function searchD(e: bigint, totient: bigint): bigint {
    var k = BigInt(1);
    var numerator = (k * totient) + BigInt(1);

    while (numerator % e !== BigInt(0)) {
        k += BigInt(1);
        numerator = (k * totient) + BigInt(1);
    }

    const d = numerator / e;
    return d;
}

function bigIntPow(base: bigint, exponent: bigint): bigint {
    let result = BigInt(1);
    while (exponent > BigInt(0)) {
        if (exponent % BigInt(2) === BigInt(1)) {
            result *= base;
        }
        base *= base;
        exponent /= BigInt(2);
    }
    return result;
}

function encrypt(message: bigint[], key: [bigint, bigint]): bigint[] {
    let encryptedMessage: bigint[] = [];
    let res = BigInt(0);

    for (const num of message) {
        res = bigIntPow(BigInt(num), BigInt(key[0])) % BigInt(key[1]);
        encryptedMessage.push(res);
    }
    return encryptedMessage;
}

export const encodeBase64 = (data: any) => {
    return Buffer.from(data).toString("base64");
};

export const decodeBase64 = (data: String) => {

    return Buffer.from(data, "base64").toString("utf8");
}

function buktiModInverse(a : number,b : number,m : number) {
    return ((a*b)%m);
}

function base64StringToIntegerArray(base64String: string): number[] {
    const base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const integerArray: number[] = [];

    for (let i = 0; i < base64String.length; i++) {
        const base64Char = base64String[i];
        
        if (base64Char === "=") { // Padding character
            continue;
        }

        const index = base64Alphabet.indexOf(base64Char);
        if (index === -1) {
            throw new Error("Invalid base64 character");
        }

        integerArray.push(index);
    }

    return integerArray;
}

function integerArrayToBase64String(integerArray: number[]): string {
    const base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let base64String = "";

    for (const intValue of integerArray) {
        if (intValue < 0 || intValue >= base64Alphabet.length) {
            throw new Error("Integer value out of range for base64 encoding");
        }

        base64String += base64Alphabet.charAt(intValue);
    }

    return base64String;
}

function integerArrayToString(integerArray: number[]): string {
    let string = "";
    
    for (const intValue of integerArray) {
        if (intValue < 10) {
            string += "0";
        }
        string += intValue.toString();
    }

    return string;
}

function stringToIntegerArray(string: string): number[] {
    const integerArray: number[] = [];

    for (let i = 0; i < string.length; i += 2) {
        const int = parseInt(string.slice(i, i+2));
        if (int < 0 || int >= 100) {
            throw new Error("Character code out of range for encoding");
        }

        integerArray.push(int);
    }

    return integerArray;
}

function numberToBigInt(numbers: number[]): bigint[] {
    const bigInts: bigint[] = [];
    for (const number of numbers) {
        bigInts.push(BigInt(number));
    }
    return bigInts;
}

export function bigIntToNumber(bigInts: bigint[]): number[] {
    const numbers: number[] = [];
    for (const bigInt of bigInts) {
        numbers.push(Number(bigInt));
    }
    return numbers;
}

// const intString = (integerArrayToString(base64int));
// //console.log(`The integer to String is: ${intString}`);
// const stringInt = (stringToIntegerArray(intString));
// //console.log(`The string to integer is: ${stringInt}`);

// const base64cipher = (integerArrayToBase64String(stringInt));
// //console.log(`The decoded base64 message is: ${base64cipher}`);
// const decode_base64 = (decodeBase64(base64cipher));
// //console.log(`The decoded message is: ${decode_base64}`);

const primeNumber = [101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599]

export function generateKeys(): bigint[] { 
    const p = BigInt(primeNumber[Math.floor(Math.random() * primeNumber.length)]);
    const q = BigInt(primeNumber[Math.floor(Math.random() * primeNumber.length)]);
    //const p = BigInt(101);
    //const q = BigInt(103);
    //console.log(`The p is: ${p}; The q is: ${q}`);
    const n = p * q;
    const totient = (p - BigInt(1)) * (q - BigInt(1));
    
    const e = chooseE(totient);
    const d = searchD(e, totient);

    return [e, d, n];
}

function stringToAsciiArray(inputString: string): number[] {
    const asciiArray: number[] = [];
    for (let i = 0; i < inputString.length; i++) {
        asciiArray.push(inputString.charCodeAt(i));
    }
    return asciiArray;
}

function asciiArrayToString(asciiArray: number[]): string {
    return asciiArray.map(code => String.fromCharCode(code)).join('');
}

export function encryption(text: string, e: bigint, n: bigint): bigint[] {
    //const base64_text = (encodeBase64(text));
    const intArray = (stringToAsciiArray(text));
    const message = numberToBigInt(intArray);
    const encryptedResult = encrypt(message, [e, n]);

    return encryptedResult;
}

export function decryption(arrInt: bigint[], d: bigint, n: bigint): string {
    //const cipher = numberToBigInt(arrInt);
    const decryptedResult = encrypt(arrInt, [d, n]);
    const numberResult = bigIntToNumber(decryptedResult);
    //const result = bigIntToNumber(decryptedResult);
    //const base64result = integerArrayToBase64String(result);
    const message = asciiArrayToString(numberResult);

    return message;
}

export function newDecryption(encrypted: string, d: bigint, n: bigint): string {
    const fourChunks = splitIntoChunks(encrypted,4);
    const fourChunks10 = base64ArrayToBase10Array(fourChunks);
    //console.log(fourChunks);
    //console.log(fourChunks10)
    const siapDIENKRIPSIBOS = numberToBigInt(fourChunks10);
    const decrypted = decryption(siapDIENKRIPSIBOS, d,n);
    //console.log(decrypted)
    //const intArrayDec = bigIntToNumber(decrypted);
    
    //return intArrayDec;
    return decrypted;
}

function splitIntoChunks(str: string, chunkSize: number): string[] {
    const chunks: string[] = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        const chunk = str.slice(i, i + chunkSize);
        chunks.push((chunk));
    }
    return chunks;
}

/* function base64Stringtobase10Array(data : string[]): bigint[] {
    const base10Array: bigint[] = [];
    for (let i = 0;i < data.length;i++) {
        const newChunk = data[i].replace(/^0+/, '')
        //console.log(data[i]);
        const angka = base64stringtointeger(newChunk);
        base10Array.push(BigInt(angka));
    }
    return base10Array;
} */

/* function base64stringtointeger(data: string): number {
    const base64Chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let returnN = 0;
    for (let i = data.length-1;i>=0;i--) {
        const nilaiHuruf = base64Chars.indexOf(data.charAt(i));
        ////console.log(nilaiHuruf)
        returnN = returnN*64 + nilaiHuruf;
        ////console.log(returnN)
    }
    return returnN;
}

//console.log(base64stringtointeger("B7j")) */


export function base10ArrayToBase64Array(base10Array: number[]): string[] {
    const base64Chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const base64Array: string[] = [];

    base10Array.forEach((num) => {
        let result: string = '';
        do {
            result = base64Chars.charAt(num % 64) + result;
            num = Math.floor(num / 64);
        } while (num > 0);
        base64Array.push(result);
    });

    return base64Array;
}

function base64ArrayToBase10Array(base64Array: string[]): number[] {
    const base64Chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const base10Array: number[] = [];

    base64Array.forEach((base64) => {
        let result: number = 0;
        for (let i = 0; i < base64.length; i++) {
            result = result * 64 + base64Chars.indexOf(base64.charAt(i));
        }
        base10Array.push(result);
    });

    return base10Array;
}

//console.log(base10ArrayToBase64Array([1,2,3]))

//console.log(base64ArrayToBase10Array(base10ArrayToBase64Array([1,2,3])))



export function base64arrayToString(data: string[]): string {
    return data.map(str => {
        while (str.length < 4) {
            str = "A" + str;
        }
        return str;
    }).join('');
}

const generator = generateKeys();
/* const e = generator[0];
const d = generator[1];
const n = generator[2]; */

const e = BigInt(10103);
const d = BigInt(1367);
const n = BigInt(10403);

//console.log(e,d,n);
const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const encRes = encryption(message, e, n);
//console.log(encRes)
//const messageBase64 = encodeBase64(encRes);
const base64message = base10ArrayToBase64Array((bigIntToNumber(encRes))); 
//console.log(`The encrypted message is: ${base64arrayToString(base64message)}`);

const decRes = decryption(encRes, d, n);

const newDec = newDecryption(base64arrayToString(base64message),d,n)
//console.log(`The decrypted message is: ${decRes}`);

//console.log(`New Decryption: ${newDec}`);

//console.log("bukti", buktiModInverse(Number(e),Number(d), 100*102));