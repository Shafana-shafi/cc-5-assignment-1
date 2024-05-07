/**
 * Generates an array of squares of the input numbers.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number[]} - Array of squared numbers.
 */
export function generateSquare(numbers) {
    return numbers.map(number => number * number);
}

/**
 * Returns an array containing only the even numbers from the input array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number[]} - Array of even numbers.
 */
export function returnEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0)
}

/**
 * Generates an array of Fibonacci numbers at the specified indices.
 * @param {number[]} indices - The array of indices.
 * @returns {number[]} - Array of Fibonacci numbers.
 */
export function calculateFibonacciNumbersAtIndices(numbers) {
    function fib(index) {
        if (index === 0)
            return 0;
        if (index === 1) {
            return 1;
        }
        return fib(index - 1) + fib(index - 2);
    }

    return numbers.map((number) => fib(number))
}

/**
 * Converts an array of temperatures from Celsius to Fahrenheit.
 * @param {Object[]} poiArray - Array of objects representing points of interest with temperature in Celsius.
 * @param {number} poiArray[].averageTemperature - Average temperature in Celsius.
 * @returns {number[]} - Array of temperatures in Fahrenheit.
 */
export function convertTemperatureToFahrenheit(poiArray) {
    return poiArray.map((poi) => poi.averageTemperature * 9 / 5 + 32);
}

/**
 * Creates a function that returns true if the value is less than or equal to the cutoff value.
 * @param {number} cutOffValue - The cutoff value.
 * @returns {Function} - A function that returns true if the value is less than or equal to the cutoff value.
 */
export function createCutOff(cutOffValue) {
    return function cutOff100(value) {
        if (value <= cutOffValue) {
            return true;
        }
        return false;
    }
}

/**
 * Replaces "CraftCode" with "CodeCraft" in each string of the input array.
 * @param {string[]} strings - Array of strings.
 * @returns {string[]} - Array of strings with "CraftCode" replaced by "CodeCraft".
 */
export function toReplaceCraftCodeWithCodeCraft(strings) {
    return strings.map(string => {
        const transformedString = string.replace("CraftCode", "CodeCraft");
        return transformedString;
    })
}

/**
 * Filters out strings containing 'u' or 'g' from the input array.
 * @param {string[]} stringsArray - Array of strings.
 * @returns {string[]} - Filtered array of strings.
 */
export function filterStringHavingUorG(stringsArray) {
    return stringsArray.filter(string => !string.includes('u') && !string.includes('g'))
}

/**
 * Filters out strings starting with 'mang' or ending with 'fy' from the input array.
 * @param {string[]} stringsArray - Array of strings.
 * @returns {string[]} - Filtered array of strings.
 */
export function filterStringsEndingWithMangOrFy(stringsArray) {
    return stringsArray.filter(string => !string.startsWith("mang") && !string.endsWith("fy"));
}

/**
 * Filters out multiples of 4 from the input array.
 * @param {number[]} numbersArray - Array of numbers.
 * @returns {number[]} - Filtered array of numbers.
 */
export function filterMultiplesof4(numbersArray) {
    const transformedArray = numbersArray.map(number => number + 10);
    return transformedArray.filter(transformedNumber => transformedNumber % 4 === 0)
}

/**
 * Extracts and filters valid email addresses from the input array of strings.
 * @param {string[]} addressesArray - Array of email addresses.
 * @returns {string[]} - Filtered array of valid email addresses.
 */
export function filterEmails(addressesArray) {
    return addressesArray.map(address => {
        const emailRegex = /[A-Za-z]+@[A-Za-z]+\.[A-Z|a-z]{2,}/;
        const matches = address.match(emailRegex);
        if (matches) {
            return matches[0].toLowerCase();
        }
        return null;
    }).filter(email => email);
}

/**
 * Extracts ages from a list of people.
 * @param {Object[]} listOfPeople - Array of objects representing people.
 * @param {number} listOfPeople[].age - Age of the person.
 * @returns {number[]} - Array of ages.
 */
export function filterAgeFromList(listOfPeople) {
    const ages = [];
    listOfPeople.forEach(person =>
        ages.push(person.age)
    );
    return ages
}

/**
 * Categorizes foods into safe or unsafe based on their ingredients.
 * @param {Object[]} foods - Array of food objects.
 * @param {string} foods[].foodName - Name of the food.
 * @param {string[]} foods[].ingredients - Ingredients of the food.
 * @returns {Object[]} - Array of categorized foods.
 */
export function categorizeSafeandUnsafeFood(foods) {
    return foods.map((food) => {
        const foodName = Object.keys(food)[0];
        const ingredients = Object.values(food)[0];
        return { [foodName]: !ingredients.includes("sugar") ? "safe" : "unsafe" }
    })
}
