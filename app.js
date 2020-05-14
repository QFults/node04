function Animal (type, sound) {
  this.type = type
  this.sound = sound
  this.makeSound = () => {
    console.log(this.sound)
  }
}

let dog = new Animal('dog', 'bark')
let cat = new Animal('cat', 'meow')
let giraffe = new Animal('giraffe', 'WEEE!')

dog.makeSound()
cat.makeSound()
giraffe.makeSound()
