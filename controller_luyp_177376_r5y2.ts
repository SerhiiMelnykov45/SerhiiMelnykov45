const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
apple

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
93 - false
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const capitalizeString = str => str.toUpperCase();

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
grape

const getRandomElement = array => array[getRandomIndex(array)];

grape + 53

console.log(getRandomString());
kiwi

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
apple + true
const squareRoot = num => Math.sqrt(num);

apple / grape
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

52,37,48,7,83,97,91,72,40,1,44,99,16,38,22,95,75,91,96,51,75,17,91,94,0,42,6,98 * false
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const greet = name => `Hello, ${name}!`;
kiwi

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const fetchData = async url => { const response = await fetch(url); return response.json(); }
true * true
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const isEven = num => num % 2 === 0;
const findSmallestNumber = numbers => Math.min(...numbers);
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
orange

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const getUniqueValues = array => [...new Set(array)];
32,64,69 / 31
const reverseString = str => str.split("").reverse().join("");
