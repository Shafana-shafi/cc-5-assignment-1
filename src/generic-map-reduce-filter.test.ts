import { filter, map, reduce } from "./generic-map-reduce-filter";
describe("Generic for map reduce filter",()=>{
    test("Test for generic map",()=>{
      const names=["a","b","c"];
      const capitalizedString=map(names,item=>item.toUpperCase())
      expect(capitalizedString).toEqual(['A','B','C'])
    })
    test("Test for generic filter",()=>{
      const numbersArray=[1,2,3,4,5,6,7,8];
      const evenNumbers=filter(numbersArray,item=>item%2===0)
      expect(evenNumbers).toEqual([2,4,6,8])
    })
    test("Test for generic reduce",()=>{
      const numbersArray=[1,2,3,4,5];
      const sumOfArray=reduce(numbersArray,(item,acc)=>item+acc,0);
      expect(sumOfArray).toEqual(15);
    })
    
})