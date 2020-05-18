const Animal = require('../animal.js')

test('Make sound function returns animal sound', () => {
  const dog = new Animal('dog', 'bark')
  expect(dog.makeSound()).toEqual(dog.sound)
})
