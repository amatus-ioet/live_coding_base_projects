import { sayHello } from './myModule.mjs'

test('should greet to user', () => {
    const name = "Abe"
    const expectedGreeting = "Hello, Abe"

    const result = sayHello(name)

    expect(result).toBe(expectedGreeting)
});
