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
    return strings.map((string) =>
        string.replace("CraftCode", "CodeCraft")
    )
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
    return listOfPeople.reduce((acc, person) => {
        acc.push(person.age);
        return acc;
    }, [])
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

/**
 * Calculate the total salary of employees under 30 years old.
 * @param {Array<Object>} employeesList - List of employee objects with 'age' and 'salary' properties.
 * @returns {number} - Total salary of employees under 30.
 */
export function getTotalSalaryForEmployeesunder30(employeesList) {
    return employeesList.reduce((accumulatedSalary, currentEmp) => {
        if (currentEmp.age <= 30)
            return currentEmp.salary + accumulatedSalary;
        return accumulatedSalary;
    }, 0)
}

/**
 * Get the full names of employees.
 * @param {Array<Object>} employeeList - List of employee objects with 'firstName' and 'lastName' properties.
 * @returns {Array<string>} - Array of full names of employees.
 */
export function getFullNameOfEmployees(employeeList) {
    const copiedList = [...employeeList];
    return copiedList.map((currentEmp) => `${currentEmp.firstName} ${currentEmp.lastName}`);
}

/**
 * Get a comma-separated string of email addresses of employees.
 * @param {Array<Object>} employeeList - List of employee objects with 'email' property.
 * @returns {string} - Comma-separated string of email addresses.
 */
export function getEmailString(employeeList) {
    const copiedList = [...employeeList]
    return copiedList.reduce((accumulated, currentEmp, index) => {
        if (index === 0)
            return currentEmp.email;
        return `${accumulated},${currentEmp.email}`;
    }, "")
}

/**
 * Finds the fruit or nut with the highest nutrition value for each nutrient.
 * @param {Array<Object>} fruitsAndNuts - List of fruit and nut objects with 'name' and 'nutritions' properties.
 * @returns {Object} - Object containing the nutrient with the highest value and the corresponding fruit or nut.
 */
export function findFruitOrNutWithHighestNutrition(fruitsAndNuts) {
    const nutritionValues = {};
    const fruitsAndNutsList = [...fruitsAndNuts]
    return fruitsAndNutsList.reduce((nutritionAndFruit, currentFruit) => {
        Object.entries(currentFruit.nutritions).forEach(([key, value]) => {
            if (Object.keys(nutritionAndFruit).includes(key)) {
                if (value > nutritionValues[key]) {
                    nutritionAndFruit[key] = currentFruit.name;
                    nutritionValues[key] = value;
                }
            } else {
                nutritionAndFruit[key] = currentFruit.name;
                nutritionValues[key] = value;
            }
        });
        return nutritionAndFruit;
    }, {});
}

/**
 * Get the common nutrients from a list of foods.
 * @param {Array<Object>} nutritionsList - List of food objects with 'nutritions' property.
 * @returns {Array<string>} - Array of common nutrients.
 */
export function getCommonNutrients(nutritionsList) {
    if (nutritionsList.length === 0) {
        return [];
    }
    const firstFoodNutrients = Object.keys(nutritionsList[0].nutritions);
    const commonNutrients = nutritionsList.reduce((accumulated, currentFood) => {
        const currentNutrients = Object.keys(currentFood.nutritions);
        return accumulated.filter(nutrient => currentNutrients.includes(nutrient));
    }, firstFoodNutrients);
    return commonNutrients;
}


/**
 * Get unique diseases treated by fruits from a list of foods.
 * @param {Array<Object>} nutritionsList - List of food objects with 'type' and 'treats' properties.
 * @returns {Array<string>} - Array of unique diseases treated by fruits.
 */
export function getUniqueDiseaseForFruits(nutritionsList) {
    return nutritionsList.reduce((accumulated, currentFood) => {
        if (currentFood.type === "fruit") {
            currentFood.treats.forEach(disease => { if (!accumulated.includes(disease)) accumulated.push(disease) })
        }
        return accumulated;
    }, [])
}

/**
 * Get common diseases treated by nuts from a list of foods.
 * @param {Array<Object>} nutritionsList - List of food objects with 'type' and 'treats' properties.
 * @returns {Array<string>} - Array of common diseases treated by nuts.
 */
export function getCommonDiseaseTreatedByNuts(foods) {
    const nuts = foods.filter(food => food.type === "nut");
    const commonTreats = nuts.reduce((acc, nut) => acc.filter(treat => nut.treats.includes(treat)), nuts[0].treats);
    return commonTreats;
}

/**
 * Transforms an array of foods by calculating the total nutrition of each food item.
 * @param {Array<Object>} foods - An array of food objects containing nutrition information.
 * @returns {Array<Object>} - An array of transformed food objects with added 'totalNutrition' property.
 */
export function transformedArraywithTotalNutrition(foods) {
    return foods.reduce((acc, food) => {
        const totalNutritions = Object.values(food.nutritions).reduce((accumulated, nutrient) => accumulated + nutrient, 0)
        const transformedFood = { ...food, totalNutrition: totalNutritions }
        acc.push(transformedFood)
        return acc;
    }, [])
}

/**
 * Finds foods that treat bone issues and returns their names.
 * @param {Array<Object>} foods - An array of food objects containing treatment information.
 * @returns {Array<string>} - An array of food names treating bone issues.
 */
export function fruitOrNutSolvingBoneIssue(foods) {
    const filteredlist = foods.filter(food => Object.values(food.treats).includes("bone issues"));
    return filteredlist.map(food => food.name)
}

/**
 * Finds foods with the maximum number of nutrition types and returns their names.
 * @param {Array<Object>} foods - An array of food objects containing nutrition information.
 * @returns {Array<string>} - An array of food names with the maximum nutrition types.
 */
export function getFoodWithMaximumNutritionTypes(foods) {
    return foods.reduce((acc, food) => {
        const nutritionsCount = Object.keys(food.nutritions).length
        if (nutritionsCount > acc.maxTypes) {
            acc.maxTypes = nutritionsCount;
            acc.foods = [{ name: food.name }]
        }
        else if (nutritionsCount === acc.maxTypes) {
            acc.foods.push({ name: food.name })
        }
        return acc;
    }, { foods: [], maxTypes: 0 }).foods;
}

/**
 * Finds a food for treating migraines with high vitamin content.
 * @param {Array<Object>} foods - An array of food objects containing treatment and nutrition information.
 * @returns {string} - The name of the food treating migraines with high vitamin content.
 */
export function getFoodForMigraneWithHighVitamin(foods) {
    return foods.filter(food => Object.values(food.treats).includes("migraine") && food.nutritions.vitamins >= 60)[0].name;
}

/**
 * Finds a food with the lowest carb value and returns its name.
 * @param {Array<Object>} foods - An array of food objects containing nutrition information.
 * @returns {string} - The name of the food with the lowest carb value.
 */
export function getFoodWithLowestCarb(foods) {
    return foods.reduce((acc, food) => {
        if (Object.keys(food.nutritions).includes("carbs") && food.nutritions.carbs < acc.carbValue) {
            acc.foodNameWithLowestCarb = food.name;
            acc.carbValue = food.nutritions.carbs;
        }
        return acc;
    }, { foodNameWithLowestCarb: "", carbValue: Infinity })
}

/**
 * Calculates the total protein content from safe nuts.
 * @param {Array<Object>} foods - An array of food objects containing nutrition and treatment information.
 * @returns {number} - The total protein content from safe nuts.
 */
export function totalProtienForSafeNuts(foods) {
    return foods.reduce((acc, food) => {
        if (Object.values(food.treats).includes("sugar") && food.type === "nut" && Object.keys(food.nutritions).includes("protein")) {
            acc.push(food.nutritions.protein);
        }
        return acc;
    }, []).reduce((acc, protienValue) => acc + protienValue)
}

/**
 * Calculates the total vitamins in foods with no sugar.
 * @param {Array<Object>} foods - An array of food objects containing nutrition and treatment information.
 * @returns {number} - The total vitamins in foods with no sugar.
 */
export function totalVitaminsInFoodWithNoSugar(foods) {
    return foods.reduce((acc, food) => {

        if (foods.type === "nut" && acc.totalNutsEaten < 1 && 'vitamins' in food.nutritions && !Object.values(food.treats).includes("sugar")) {
            acc.totalVitamins += food.nutritions.vitamins;
            acc.totalNutsEaten += 1;

        }
        if (foods.type === "fruit" && acc.totalFruitsEaten < 1 && 'vitamins' in food.nutritions && !('sugar' in food.nutritions)) {
            if ('vitamins' in food.nutritions && !('sugar' in food.nutritions)) {
                acc.totalVitamins += food.nutritions.vitamins;
                acc.totalFruitsEaten += 1;
            }
        }
        return acc;
    }, {
        totalFruitsEaten: 0, totalNutsEaten: 0
        , totalVitamins: 0
    }).totalVitamins
}

/**
 * Categorizes numbers into odd and even and calculates their sums.
 * @param {number} number - The upper limit of the numbers to be categorized.
 * @returns {{ sumOfOddNumbers: number, sumOfEvenNumbers: number }} - The sum of odd and even numbers.
 */
export function categorizeNum(number) {
    const numbers = [];
    for (let i = 1; i <= number; i += 1) {
        numbers.push(i);
    }
    const categorizedNumbers = numbers.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even.push(num);
        } else {
            acc.odd.push(num);
        }
        return acc;
    }, { odd: [], even: [] });
    const sumOfOddNumbers = categorizedNumbers.odd.reduce((acc, num) => acc + num)
    const sumOfEvenNumbers = categorizedNumbers.even.reduce((acc, num) => acc + num)
    return { sumOfOddNumbers, sumOfEvenNumbers };
}

/**
 * Categorizes alphabets into vowels and consonants.
 * @returns {{ vowels: Array<string>, consonants: Array<string> }} - The categorized vowels and consonants.
 */
export function categorizeAlphabets() {
    const alphabets = [];
    for (let i = 97; i <= 122; i += 1) {
        alphabets.push(String.fromCharCode(i));
    }
    return alphabets.reduce((result, alphabet) => {
        if ('aeiou'.includes(alphabet)) {
            result.vowels.push(alphabet);
        } else {
            result.consonants.push(alphabet);
        }
        return result;
    }, { vowels: [], consonants: [] });
}

/**
 * Extracts unique actor names from movie data.
 * @param {Array<Object>} movieData - An array of movie objects containing cast information.
 * @returns {Array<string>} - An array of unique actor names.
 */
export function getActorNames(movieData) {
    const castObject = movieData.reduce((acc, movie) => {
        movie.cast.forEach(actor => acc.add(actor))
        return acc;
    }, new Set());
    return Array.from(castObject)
}

/**
 * Groups movie titles year-wise, listing up to three titles per year.
 * @param {Array<Object>} moviedata - An array of movie objects containing title and year information.
 * @returns {Object} - An object with years as keys and arrays of movie titles as values.
 */
export function getYearWiseMovie(moviedata) {
    return moviedata.reduce((acc, movie) => {
        if (!acc[movie.year]) {
            acc[movie.year] = [];
        }
        if (acc[movie.year].length < 3)
            acc[movie.year].push(movie.title)
        return acc;
    }, {})
}

/**
 * Removes leading whitespace characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with leading whitespace characters removed.
 */
export function trimLeading(str) {
    return str.split('').reduce((acc, char) => {
        if (acc.trimmed || char !== ' ') {
            acc.trimmed = true;
            acc.result += char;
        }
        return acc;
    }, { result: '', trimmed: false }).result;
}

/**
 * Removes trailing whitespace characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with trailing whitespace characters removed.
 */
export function trimTrailing(str) {
    return str.split('').reduceRight((acc, char) => {
        if (acc.trimmed || char !== ' ') {
            acc.trimmed = true;
            acc.result = char + acc.result;
        }
        return acc;
    }, { result: '', trimmed: false }).result;
}

/**
 * Replaces consecutive spaces in a string with a single space.
 * @param {string} str - The input string.
 * @returns {string} - The string with consecutive spaces replaced by a single space.
 */
export function singleSpace(str) {
    return str.replace(/\s+/g, ' ');
}

/**
 * Composes multiple functions into a single function.
 * @param {...Function} funcs - Functions to be composed.
 * @returns {Function} - A composed function.
 */
export function compose(...funcs) {
    return function (arg) {
        return funcs.reduceRight((acc, func) => func(acc), arg);
    };
}

