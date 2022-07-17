const {isEven} = require("./basic")

test("is the number is even",()=>{
    expect(isEven(3)).toBeFalsy()
})