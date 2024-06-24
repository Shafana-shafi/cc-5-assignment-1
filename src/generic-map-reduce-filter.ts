/**
 * Applies a transformation function to each item in the array and returns an array of transformed items.
 * @param {T[]} array The array to be mapped.
 * @param {(item: T) => U} transform The transformation function to apply to each item.
 * @returns {U[]} An array of transformed items.
 */
export function map<T, U>(array: T[], transform: (item: T) => U) {
  const result:U[] = [];
  for(const item of array){
    result.push(transform(item))
  }
 return result
}

/**
 * Filters elements from the array based on a predicate function.
 * @param {T[]} array The array to be filtered.
 * @param {(item: T) => boolean} predicate The predicate function used to test each element.
 * @returns {T[]} An array of elements that satisfy the predicate.
 * @template T The type of elements in the input and output arrays.
 */
export function filter<T>(array:T[],predicate:(item:T)=>boolean):T[]{
 const result:T[] = [];
 for(const item of array) {
    if(predicate(item))
       result.push(item)
    }
    return result
}

/**
 * Reduces the array to a single value by applying a reducer function and an initial value.
 * @param {T[]} array The array to be reduced.
 * @param {(accumulator: U, value: T) => U} reducer The reducer function to apply to each element.
 * @param {U} initialValue The initial value of the accumulator.
 * @returns {U} The final reduced value..
 */
export function reduce<T, U>(array: T[],reducer:(accumulator:U,value:T)=>U,initialValue:U):U{
    let accumulator = initialValue;
    for (let item of array) {
        accumulator = reducer(accumulator, item);
    }
    return accumulator;
}
