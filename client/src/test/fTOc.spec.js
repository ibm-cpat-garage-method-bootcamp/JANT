const fToC = () =>{
    return 0;
}

describe('fToC', ()=> {
    test ('canary verifies test tool', ()=>{
        expect(true).toEqual(false);
    });

    test('32 degrees f is 0 degrees in c',()=>{
        expect(fToC(32)).toEqual(0);
    })
});

