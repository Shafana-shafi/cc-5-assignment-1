import { expect, test } from "vitest";
import {
    generateSquare, returnEvenNumbers, calculateFibonacciNumbersAtIndices, convertTemperatureToFahrenheit, createCutOff, toReplaceCraftCodeWithCodeCraft, filterStringHavingUorG, filterStringsEndingWithMangOrFy, filterMultiplesof4, filterEmails, filterAgeFromList, categorizeSafeandUnsafeFood, toFindSecondLargestWithoutReduce, toFindSecondLargestUsingReduce, getQoutesOfAllAuthors,
    getQuotesContainingWord, getQoutesString, getAuthorsList, someUsingImperativeApproach, someUsingReduce
} from "./src/map-reduce-filter";

describe('tests for map-filter-reduce', () => {
    // Test case setup and assertion
    test('test for map function', () => {
        const numbers = [1, 2, 3, 4];
        const squaredArray = generateSquare(numbers);
        expect(squaredArray).toEqual([1, 4, 9, 16])
    });

    // Test for the filter function
    test('test for filter function', () => {
        const numbers = [1, 2, 3, 4];
        const filteredArray = returnEvenNumbers(numbers);
        expect(filteredArray).toEqual([2, 4]);
    });

    // Test for the calculateFibonacciNumbersAtIndices functi
    test('test for function that gives fibonnaci number at given index', () => {
        const numbers = [2, 1, 5, 7];
        const filteredArray = calculateFibonacciNumbersAtIndices(numbers);
        expect(filteredArray).toEqual([1, 1, 5, 13])
    });

    // Test for the convertTemperatureToFahrenheit function
    test('test to generate an array that has the averageTemperature converted into fahrenheit units.', () => {
        const poiArray = [
            {
                placeName: "Paris",
                famousFor: "Eiffel Tower",
                averageTemperature: 15.6
            },
            {
                placeName: "New York City",
                famousFor: "Statue of Liberty",
                averageTemperature: 12.8
            },
            {
                placeName: "Tokyo",
                famousFor: "Sushi",
                averageTemperature: 16.2
            },
            {
                placeName: "Rio de Janeiro",
                famousFor: "Carnival",
                averageTemperature: 24.5
            },
            {
                placeName: "Sydney",
                famousFor: "Sydney Opera House",
                averageTemperature: 21.3
            },
            {
                placeName: "Cairo",
                famousFor: "Pyramids of Giza",
                averageTemperature: 25.7
            },
            {
                placeName: "Rome",
                famousFor: "Colosseum",
                averageTemperature: 19.8
            },
            {
                placeName: "Cape Town",
                famousFor: "Table Mountain",
                averageTemperature: 17.2
            },
            {
                placeName: "Bali",
                famousFor: "Beaches",
                averageTemperature: 27.9
            },
            {
                placeName: "Machu Picchu",
                famousFor: "Inca Ruins",
                averageTemperature: 14.1
            }
        ];
        expect(convertTemperatureToFahrenheit(poiArray)).toEqual([60.08, 55.04, 61.16, 76.1, 70.34, 78.25999999999999, 67.64, 62.959999999999994, 82.22, 57.379999999999995,]);
    });

    // Test for the createCutOff higher-order function
    test("Heigher order function implementation to check if the mark is greater than cutt off marks", () => {
        const cutOff100 = createCutOff(100)
        expect(cutOff100(89), true)
        expect(cutOff100(189), false)
    });

    // Test for the toReplaceCraftCodeWithCodeCraft function
    test("To replace CraftCode with CodeCraft in a string", () => {
        const strings = ["CraftCode is a nice company", "We love CraftCode", "We are working in CraftCode"];
        expect(toReplaceCraftCodeWithCodeCraft(strings)).toEqual(["CodeCraft is a nice company", "We love CodeCraft", "We are working in CodeCraft"])
    });

    // Test for the filterStringHavingUorG function
    test("To filter Strings having 'u' or 'g'", () => {
        const StringsArray = ['browl', 'faaast', 'energy', 'stand', 'eat', 'lunch'];
        expect(filterStringHavingUorG(StringsArray)).toEqual(["browl", "faaast", "stand", "eat"]);

    });

    // Test for the filterStringsEndingWithMangOrFy function
    test("To filter Strings ending with mang or fy", () => {
        const StringsArray = ['mangalore', 'semangin', '2 lonely', 'verify', 'rectify', 'mangala', 'notifyy'];
        expect(filterStringsEndingWithMangOrFy(StringsArray)).toEqual(['semangin', '2 lonely', 'notifyy']);
    });

    // Test for the filterMultiplesof4 function
    test("To add 10 to each number and filter those which can be divided by 4", () => {
        const numbers = [34, 45, 2, 53, 84, 542, 31, 23];
        expect(filterMultiplesof4(numbers)).toEqual([44, 12, 552]);
    });

    // Test for the filterEmails function
    test("To filter emails from Address", () => {
        const addressesArray = ["34, brighten street, email: BS@sft.com", "Behind hotel paragon, rode street, micHel@sun.it", "ulef court, cown street, email: cown@street", "CodeCraft"];
        expect(filterEmails(addressesArray)).toEqual(["bs@sft.com", "michel@sun.it"]);
    });

    // Test for the filterAgeFromList function
    test("To get the ages list from list of people", () => {
        const people = [
            {
                name: 'John',
                age: 13
            },
            {
                name: 'Mark',
                age: 56,
            },
            {
                name: 'Rachel',
                age: 45,
            },
            {
                name: 'Nate',
                age: 67,
            },
            {
                name: 'Jeniffer',
                age: 65,
            }
        ];
        expect(filterAgeFromList(people)).toEqual([13, 56, 45, 67, 65]);
    });

    // Test for the categorizeSafeandUnsafeFood function
    test("Test to create list of safe and unsafe food from given food list", () => {
        const foods = [
            { idli: ['rice', 'urad', 'oil', 'cashew', 'water'] },
            { chapathi: ['atta', 'gluten', 'water', 'oil', 'sugar'] },
            { pizza: ['maida', 'sugar', 'oil', 'chiili', 'flakes', 'sause'] },
            { 'paneer masala': ['paneer', 'onion', 'tomato', 'garlic', 'oil'] },
        ];
        expect(categorizeSafeandUnsafeFood(foods)).toEqual([{ "idli": "safe" }, { "chapathi": "unsafe" }, { "pizza": "unsafe" }, { "paneer masala": "safe" }])

    });

    // Test to find the second largest number in an array using forEach loop.
    test("Test for function to get the second largest in an array using forEach", () => {
        const numbersArray = [1, 9, 3, 10, 13];
        expect(toFindSecondLargestWithoutReduce(numbersArray)).toEqual(10);
    });

    // Test to find the second largest number in an array using reduce method.
    test("Test for function to get second largest in an array using reduce", () => {
        const numbersArray = [1, 14, 3, 10, 13];
        expect(toFindSecondLargestUsingReduce(numbersArray)).toEqual(13);
    });

    // Test to get quotes and authors from a list of quotes.
    test("Test for function to to get the qoutes and authors", () => {
        const qoutesList = [
            {
                "text": "Life is change. Growth is optional. Choose wisely.",
                "author": "Karen Clark"
            },
            {
                "text": "You'll see it when you believe it.",
                "author": "Buddha"
            }];
        expect(getQoutesOfAllAuthors(qoutesList)).toEqual([
            {
                "Karen Clark": [
                    "Life is change. Growth is optional. Choose wisely.",],
            },
            {
                "Buddha": [
                    "You'll see it when you believe it.",],
            },
        ]);
    });

    // Test to get quotes containing a specific word.
    test("Test for function that returns qoutes array that has given word", () => {
        const qoutesList = [{
            "text": "Life is a learning experience, only if you learn.",
            "author": "Yogi Berra"
        },
        {
            "text": "We can only learn to love by loving hate",
            "author": "Lao Tzu"
        },
        {
            "text": "I hate no one",
            "author": "none"
        }
        ];
        const word = "hate"
        expect(getQuotesContainingWord(qoutesList, word)).toEqual(["We can only learn to love by loving hate", "I hate no one"])
    });

    // Test to get quotes containing a specific word
    test("Test for function to get Quotes string", () => {
        const qoutesList = [{
            "text": "Life is a learning experience, only if you learn.",
            "author": "Yogi Berra"
        },
        {
            "text": "We can only learn to love by loving hate",
            "author": "Lao Tzu"
        },
        {
            "text": "I hate me",
            "author": "me"
        }]
        expect(getQoutesString(qoutesList)).toEqual(["Life is a learning experience, only if you learn.", "We can only learn to love by loving hate", "I hate me"])
    });

    // Test to get quotes as strings
    test("Test for function to get authors from list by removing duplicates", () => {
        const qoutesList = [
            {
                "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
                "author": "Thomas Edison"
            },
            {
                "text": "You can observe a lot just by watching.",
                "author": "Yogi Berra"
            },
            {
                "text": "To invent, you need a good imagination and a pile of junk",
                "author": "Thomas Edison"
            },
            {
                "text": "Difficulties increase the nearer we get to the goal.",
                "author": "Yogi Berra"
            },
            {
                "text": "Fate is in your hands and no one elses",
                "author": "Byron Pulsifer"
            },
            {
                "text": "Be the chief but never the lord.",
                "author": "Lao Tzu"
            },
            {
                "text": "Nothing happens unless first we dream.",
                "author": "Byron Pulsifer"
            },
            {
                "text": "Well begun is half done.",
                "author": "Aristotle"
            },
            {
                "text": "Life is a learning experience, only if you learn.",
                "author": "Yogi Berra"
            },
            {
                "text": "Self-complacency is fatal to progress.",
                "author": "Margaret Sangster"
            },
            {
                "text": "Peace comes from within. Do not seek it without.",
                "author": "Buddha"
            },
            {
                "text": "What you give is what you get.",
                "author": "Byron Pulsifer"
            },
            {
                "text": "We can only learn to love by loving.",
                "author": "Lao Tzu"
            },
            {
                "text": "Life is change. Growth is optional. Choose wisely.",
                "author": "Karen Clark"
            },
            {
                "text": "You'll see it when you believe it.",
                "author": "Buddha"
            },];
        expect(getAuthorsList(qoutesList)).toEqual(["Thomas Edison", "Yogi Berra", "Byron Pulsifer", "Lao Tzu", "Aristotle", "Margaret Sangster", "Buddha", "Karen Clark",]);
    });

    // Test for some function in imperative approach.
    test("Test for some function in imperative approach", () => {
        const numbersArray = [1, 7, 3, 9, 5];
        function isEven(number) {
            if (number % 2 === 0)
                return true;
            return false;
        }
        expect(someUsingImperativeApproach(numbersArray, isEven)).toBe(false);
    });

    // Test Some function using Reduce.
    test("Test for some function using reduce", () => {
        const numbersArray = [1, 7, 3, 9, 5];
        function isEven(number) {
            if (number % 2 === 0)
                return true;
            return false;
        }
        expect(someUsingReduce(numbersArray, isEven)).toBe(false);
    });
})