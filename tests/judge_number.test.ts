import {isOdd} from "../src/judge_number"

describe("is odd",()=>{
    test("1 digit true",()=>{
        expect(isOdd(3)).toBe(true)
    })

    test("1 digit false",()=>{
        expect(isOdd(4)).toBe(false)
    })

    test("more digits true",()=>{
        expect(isOdd(23)).toBe(true)
    })

    test("more digits false",()=>{
        expect(isOdd(24)).toBe(false)
    })
})