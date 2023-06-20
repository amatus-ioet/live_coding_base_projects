import { play } from './myModule.mjs'

test('should return the same number when is not multiple of 3 or 5', () => {
    const number = 1

    const result = play(number)
    

    expect(result).toBe(number)
});

test('should return Fizz  if it is a multiple of 3',() =>{
    const number =3
    const result = play(number)
    expect(result).toBe('Fizz')
});

test ('should return Buzz if it is a multiple of 5',() =>{
    const number = 5
    const result = play(number)
    expect(result).toBe('Buzz')
});