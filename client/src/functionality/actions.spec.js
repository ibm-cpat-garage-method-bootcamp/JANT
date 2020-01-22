import { add, productList } from './actions'


describe("foo", () => {
    test('canary verifies test tools', () => {
        expect(false).toEqual(false);
    })

    test('Successful add' , () => {
        expect(add(5,productList, 'we add 5')).toEqual('Product is added!');
    })

    test('Unsuccessful add' , () => {
        expect(add('apple',productList, 'we add apple')).toEqual('Product exists');
    })

    test('Unsuccessful add' , () => {
        expect(add(5,productList, 'we add 5')).toEqual('Product exists');
    })
    test('size of the obj', () => {
        expect(Object.keys(productList).length).toEqual(3)
    })

});
