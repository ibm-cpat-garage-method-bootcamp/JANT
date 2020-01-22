const farenheitToCelsius = (input) => {
    if (typeof input === 'string') throw new Error('string')
    if (Array.isArray(input)) throw new Error('object')
    return (input-32)*5/9;
}

describe("f-to-cel", () => {
    test('canary verifies test tools', () => {
        expect(false).toEqual(false);
    })

    test('32 degrees F is 0 degrees C', () => {
        expect(farenheitToCelsius(32)).toEqual(0);
    })

    test('212 degrees F is 100 degrees C', () =>{
        expect(farenheitToCelsius(212)).toEqual(100)
    })
    
    test('when val is not a num, throw an err', ()=>{
        expect(()=>{
            farenheitToCelsius('test');
        }).toThrow(new Error('string'));

        expect(()=>{
            farenheitToCelsius([1,2,3]);
        }).toThrow(new Error('object'));
    })
});
