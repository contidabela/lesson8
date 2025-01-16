const appOperations = require('../src/appOperations');

test("multiplication property of zero", ()=> {
    expect(appOperations.multiply(5,0)).toBe(0);
})

test("adding two values", ()=> {
    expect(appOperations.add(5,5)).toBe(10);
})

test("substracting two values", ()=> {
    expect(appOperations.substract(7,5)).toBe(2);
})