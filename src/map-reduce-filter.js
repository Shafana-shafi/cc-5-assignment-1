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
export function calculateFibonacciNumbersAtIndices(indices) {
    function fib(index) {
        if (index === 0)
            return 0;
        if (index === 1) {
            return 1;
        }
        return fib(index - 1) + fib(index - 2);
    }

    return indices.map((number) => fib(number))
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
    return ((value) => {
        if (value <= cutOffValue) {
            return true;
        }
        return false;
    })
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
    return addressesArray.reduce((acc, address) => {
        const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/;
        const matches = address.match(emailRegex);
        if (matches) {
            const email = matches[0].toLowerCase();
            acc.push(email);
        }
        return acc;
    }, []);
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

/**
 * Finds the second largest number in an array using forEach loop.
 * @param {number[]} numbersArray - Array of numbers.
 * @returns {number} - The second largest number.
 */
export function toFindSecondLargestWithoutReduce(numbersArray) {
    let largest = numbersArray[0];
    let secondLargest = numbersArray[0];
    numbersArray.forEach(number => {
        if (number > largest) {
            secondLargest = largest;
            largest = number;
        }
        else if (number > secondLargest) {
            secondLargest = number;
        }
    })
    return secondLargest;
}

/**
 * Finds the second largest number in an array using reduce method.
 * @param {number[]} numbersArray - Array of numbers.
 * @returns {number} - The second largest number.
 */
export function toFindSecondLargestUsingReduce(numbersArray) {
    let secondLargest = numbersArray[0];
    let largest = numbersArray[0];
    numbersArray.reduce((_, currentValue) => {
        if (currentValue > largest) {
            secondLargest = largest;
            largest = currentValue;
        }
        else if (currentValue > secondLargest && currentValue < largest) {
            secondLargest = currentValue;
        }
        return largest;
    }, numbersArray[0]);
    return secondLargest;
}

/**
 * Returns an array of objects where each object contains quotes of an author.
 * @param {Object[]} qoutesList - Array of objects containing quotes and authors.
 * @returns {Object[]} - Array of objects with authors as keys and their quotes as values.
 */
export function getQoutesOfAllAuthors(qoutesList) {
    return qoutesList.map(qoute => {
        const author = Object.values(qoute)[1];
        const qoutes = Object.values(qoute)[0];
        return { [author]: [qoutes] }
    })
}

/**
 * Returns an array of quotes containing a specific word.
 * @param {Object[]} quotesList - Array of objects containing quotes.
 * @param {string} word - The word to search for in quotes.
 * @returns {string[]} - Array of quotes containing the specified word.
 */
export function getQuotesContainingWord(quotesList, word) {
    return quotesList.reduce((result, quote) => {
        const quoteText = Object.values(quote)[0];
        if (quoteText.includes(word)) {
            result.push(quoteText);
        }
        return result;
    }, []);
}

/**
 * Returns an array of strings of quotes.
 * @param {Object[]} qoutesList - Array of objects containing quotes.
 * @returns {string[]} - Array of quotes.
 */
export function getQoutesString(qoutesList) {
    return qoutesList.map(qoute => {
        const qoutes = Object.values(qoute)[0];
        return qoutes;
    })
}

/**
 * Returns an array of authors from a list of quotes, without duplicates.
 * @param {Object[]} quotesList - Array of objects containing quotes and authors.
 * @returns {string[]} - Array of unique author names.
 */
export function getAuthorsList(quotesList) {
    return quotesList.reduce((result, curr) => {
        const author = Object.values(curr)[1];
        if (!result.includes(author)) {
            return result.concat(author);
        }
        return result;
    }, [])
}

/**
 * Checks if any element in the array satisfies the provided testing function using reduce method.
 * @param {any[]} items - Array of items to test.
 * @param {Function} predicate - Function to test for each element.
 * @returns {boolean} - True if at least one element passes the test, otherwise false.
 */
export function someUsingReduce(items, predicate) {
    return items.reduce((accumulated, currentValue) => {
        if (accumulated) {
            return true;
        }
        return predicate(currentValue);
    }, false);
}

/**
 * Checks if any element in the array satisfies the provided testing function using an imperative approach.
 * @param {any[]} items - Array of items to test.
 * @param {Function} predicate - Function to test for each element.
 * @returns {boolean} - True if at least one element passes the test, otherwise false.
 */
export function someUsingImperativeApproach(items, predicate) {
    const result = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const item of items) {
        if (predicate(item)) {
            result.push(true);
        }
        result.push(false);
    }
    if (result.includes(true)) {
        return true;
    }
    return false;
}







