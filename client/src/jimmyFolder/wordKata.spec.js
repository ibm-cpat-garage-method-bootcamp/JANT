// Word Wrap kata:
// Given an input string and a column number, write a function that returns the string, 
// but with line breaks inserted at just the right places to make sure that no line is longer than the column 
// number. You try to break lines at word boundaries but long words (words that are longer that the column width) 
// should be broken at the column width. 
// You should also try to make each line as long as possible without exceeding the column width.

const wordWrap = (input, col) => {
   const rows = [];
   while(input.length > col){
       const space = input.lastIndexOf(' ', col);
       const ind = space > -1 ? Math.min(space, col) : col
       rows.push(input.substring(0, ind))
       input = input.substring(ind).trim()
   }
   rows.push(input)
   return rows.join('\n')
}

describe('wordWrap', ()=>{
    // test('123456789 wrap 3', () => {
    //     expect('123456789').toEqual(wordWrap('123456789', 3))
    // })



    test('123 456 789 wrap 3', () =>{
        expect('123 456 789').toEqual(wordWrap('123 456 789', 3).replace(/\n|\r/g, " "))
    })

    test('{aaa bbb ccc, 2}', () => { 
        expect(wordWrap('aaa bbb ccc', 2)).toEqual('aa\na\nbb\nb\ncc\nc')
    })

    test('abc, 1', () =>{
        expect(wordWrap('abc',1)).toEqual('a\nb\nc')
    })

    test('bigword, 7' , () => {
        expect(wordWrap('bigWord', 7)).toEqual('bigWord')
    })
})