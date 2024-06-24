/**
 * Interface representing an expectation with matchers.
 */
interface Expect {
    /**
     * Checks if the value matches the expected value.
     * @param expectedValue The expected value to compare against.
     * @returns `true` if the value matches the expected value, `false` otherwise.
     */
    toBe(expectedValue: number): boolean;
    
    /**
     * Negated expectation interface.
     */
    not: NegatedExpect;
}

/**
 * Interface representing negated matchers for expectations.
 */
interface NegatedExpect {
    /**
     * Checks if the value does not match the expected value.
     * @param expectedValue The expected value to compare against.
     * @returns `true` if the value does not match the expected value, `false` otherwise.
     */
    toBe(expectedValue: number): boolean;
}

/**
 * Factory function to create an expectation object for a given value.
 * @param value The value to be tested against expectations.
 * @returns An `Expect` object providing `toBe` and `not.toBe` matchers.
 */
export function expected(value: number): Expect {
    return {
        /**
         * Checks if the value matches the expected value.
         * @param expectedValue The expected value to compare against.
         * @returns `true` if the value matches the expected value, `false` otherwise.
         */
        toBe(expectedValue: number): boolean {
            return value === expectedValue;
        },
        /**
         * Negated expectation object.
         */
        not: {
            /**
             * Checks if the value does not match the expected value.
             * @param expectedValue The expected value to compare against.
             * @returns `true` if the value does not match the expected value, `false` otherwise.
             */
            toBe(expectedValue: number): boolean {
                return value !== expectedValue;
            }
        }
    };
}
/**
 * Interface representing an expectation with matchers.
 */
interface Expect {
    /**
     * Checks if the value matches the expected value.
     * @param expectedValue The expected value to compare against.
     * @returns `true` if the value matches the expected value, `false` otherwise.
     */
    toBe(expectedValue: number): boolean;
    
    /**
     * Negated expectation interface.
     */
    not: NegatedExpect;
}

/**
 * Interface representing negated matchers for expectations.
 */
interface NegatedExpect {
    /**
     * Checks if the value does not match the expected value.
     * @param expectedValue The expected value to compare against.
     * @returns `true` if the value does not match the expected value, `false` otherwise.
     */
    toBe(expectedValue: number): boolean;
}

/**
 * Factory function to create an expectation object for a given value.
 * @param value The value to be tested against expectations.
 * @returns An `Expect` object providing `toBe` and `not.toBe` matchers.
 */
export function customExpect(value: number): Expect {
    return {
        /**
         * Checks if the value matches the expected value.
         * @param expectedValue The expected value to compare against.
         * @returns `true` if the value matches the expected value, `false` otherwise.
         */
        toBe(expectedValue: number): boolean {
            return value === expectedValue;
        },
        /**
         * Negated expectation object.
         */
        not: {
            /**
             * Checks if the value does not match the expected value.
             * @param expectedValue The expected value to compare against.
             * @returns `true` if the value does not match the expected value, `false` otherwise.
             */
            toBe(expectedValue: number): boolean {
                return value !== expectedValue;
            }
        }
    };
}
