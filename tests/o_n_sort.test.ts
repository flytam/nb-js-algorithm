import {o_n_sort} from "../src/o_n_sort";

describe("o_n_sort test",()=>{
    test("some positive integer",()=>{
        o_n_sort([3,2,1]).then(result =>{
            expect(result).toEqual([1,2,3])
        })
    })
})